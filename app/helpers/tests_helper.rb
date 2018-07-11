module TestsHelper
    TEST_LEVELS = { 0 => :easy, 1 => :easy, 2 => :advanced, 3 => :advanced, 4 => :advanced, 5 => :hard }.freeze

  def test_level(test)
    TEST_LEVELS[test.level] || :hero
  end

  def questions_quantity(test)
    pluralize(test.questions.count, "question")
  end
end
