class QuestionsController < ApplicationController
  before_action :find_test, only: %i[index create]
  before_action :find_question, only: %i[show edit update destroy]
  before_action :new_question, only: :show

  rescue_from ActiveRecord::RecordNotFound, with: :rescue_with_questin_not_found

  def index
  end

  def show
  end

  def new
    @question = Question.new
  end

  def edit
  end

  def create
    @question = @test.questions.new(question_params)
    if @question.save
      redirect_to test_questions_path(@test)
    else
      render "new"
    end
  end


  def update
    if @question.update(question_params)
      redirect_to test_path(@question.test)
    else
      render "edit"
    end
  end

  def destroy
    @question.destroy
    redirect_to test_questions_path(@test)
  end


  private

  def question_params
    params.require(:question).permit(:body)
  end

  def find_test
    @test = Test.find(params[:test_id])
  end

  def find_question
    @question = Question.find(params[:id])
  end

  def rescue_with_questin_not_found
    render plain: "Вопрос не найден"
  end

  def new_question
    @new_question = @question.test.questions.new
  end
end
