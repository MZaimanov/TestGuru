module TestsHelper
    TEST_LEVELS = { 0 => :easy, 1 => :elementary, 2 => :advanced, 3 => :hard }.freeze

  def test_level(test)
    TEST_LEVELS[test.level] || :hero
  end

  def questions_quantity(test)
    pluralize(test.questions.count, "question")
  end
end
