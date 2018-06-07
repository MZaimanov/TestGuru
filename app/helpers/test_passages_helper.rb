module TestPassagesHelper

  def test_result(test_passage)
    test_passage.success? ? "SUCCESS" : "FAIL"
  end

  def result_class(test_passage)
    test_passage.success? ? t('test_passage.pass') : t('test_passage.fail')
  end
end
