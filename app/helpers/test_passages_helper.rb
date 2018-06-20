module TestPassagesHelper

  def test_result(test_passage)
    test_passage.success? ? "SUCCESS" : "FAIL"
  end

  def result_string(test_passage)
    test_passage.success? ? t('test_passage.pass') : t('test_passage.fail')
  end

  def progress_bar(test_passage)
    test_passage.current_question_number*100/test_passage.test.questions.count
  end
end
