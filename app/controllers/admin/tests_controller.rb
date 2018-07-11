class Admin::TestsController < Admin::BaseController

  before_action :find_test, only: %i[show edit update destroy start update_inline]
  before_action :find_tests, only: %i[index update_inline]
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_with_test_not_found

  def index

  end

  def show
    @test = Test.find(params[:id])
  end

  def new
    @test = Test.new
  end

  def edit
  end

  def create
    @test = Test.new(test_params)

    if @test.save
      redirect_to @test
    else
      render "new"
    end
  end

  def update
    if @test.update(test_params)
      redirect_to @test
    else
      render "edit"
    end
  end

  def update_inline
    if @test.update(test_params)
      redirect_to admin_tests_path
    else
      render :index
    end
  end

  def destroy
    @test.destroy

    redirect_to tests_path
  end

  def start
    @test = Test.find(params[:id])
    current_user.tests.push(@test)
    redirect_to current_user.test_passage(@test)
  end

  private

  def find_test
    @test = Test.find(params[:id])
  end

  def find_tests
    @tests = Test.all
  end

  def test_params
    params.require(:test).permit(:title, :level, :category_id, :timer)
  end
end
