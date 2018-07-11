class TestPassagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_test_passage, only: %i[show result update gist]

  def show
  end

  def result
  end

  def update
    if check_timer
      @test_passage.stop!
    else
      @test_passage.accept!(params[:answer_ids])
    end

    if @test_passage.completed?
      BadgeService.new(@test_passage).call
      TestsMailer.completed_test(@test_passage).deliver_now
      redirect_to result_test_passage_path(@test_passage)
    else
      render :show
    end
  end

  def gist
    result = GistQuestionService.new(@test_passage.current_question).call
    if result
      gist = current_user.gists.create(question_id: @test_passage.current_question_id, link: result.id)
      flash[:notice] = t('gist.success', link: result.html_url)
    else
      flash[:alert] = t('gist.failure')
    end

    redirect_to @test_passage
  end

  private

  def set_test_passage
    @test_passage = TestPassage.find(params[:id])
  end

  def check_timer
    @test_passage.test.timer_exists? && @test_passage.time_over?
  end
end
