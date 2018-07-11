class AnswersController < ApplicationController
  before_action :set_answer, only: %i[show update ]


  def show
  end

  def update
      if @answer.update(answer_params)
        redirect_to @answer, notice: 'Answer was successfully updated.'
      else
        render :edit
      end
  end

  private

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:body, :correct)
  end
end
