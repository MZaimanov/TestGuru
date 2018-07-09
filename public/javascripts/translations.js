I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"attributes":{"test":{"category":"Category","level":"Level","title":"Title"}},"errors":{"messages":{"blank":"can`t be blank","record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}},"models":"Test"},"admin":{"answers":{"edit":{"header":"Edit answer"},"new":{"header":"New Answer"},"show":{"header":"Answers"}},"badges":{"create":{"success":"Badge was successfully created"}},"edit":{"header":"Edit %{title} Test"},"new":{"header":"Create new Test"},"tests":{"create":{"success":"Test was successfully created"},"form_inline":{"submit":"OK"},"index":{"actions":"Actions","category":"Category","header":"Edit tests","level":"Level","questions":"Questions","title":"Title"}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","new":{"header":"Registration"},"signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","login":"Welcome, %{first_name} %{last_name}!","new":{"header":"Enter the Guru Gates","submit":"Login"},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"shared":{"links":{"confirmation":"Don`t recive confirmation instructions?","forgot":"Forgot your password?","sign_in":"Sign in","sign_up":"Sign up"}},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"feedbacks":{"new":{"header":"Write your feedback, "}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"gist":{"description":"A question about %{title} from TestGuru","failure":"An error occured while saving gist","link":"Gist Question","success":"Gist %{link} successfully saved"},"hello":"Welcome","helpers":{"label":{"answer":{"body":"Body:","correct":"Correct?"},"question":{"body":"Body:"},"test":{"category_id":"Category","level":"Level","title":"Title"},"user":{"email":"Email","first_name":"First Name","last_name":"Last Name","password":"Password","password_confirmation":"Password confirmation","remember_me":"Remember me"}},"select":{"prompt":"Please, select"},"submit":{"answer":{"create":"Create answer","update":"Update answer"},"create":"Create %{model}","question":{"create":"Create question","update":"Update question"},"submit":"Save %{model}","test":{"create":"Create test","update":"Update test"},"update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"js":{"links":{"cancel":"Cancel","edit":"Edit"}},"label":{"answer":"Answers:","correct":"Correct:","from":"New Feedback From: ","minpass":"%{length} characters minimum","of":"of","questions":"Question:","remember_me":"Remember me"},"links":{"admin_panel":"Admin Panel","back":"Back","badges":"Badges","cancel":"Cancel","confirm":"Are you sure?","delete":"Delete","edit":"Edit","feedback":"Feedback","gists":"Show Gists","logout":"Logout","new_answer":"Create new Answer","new_badge":"New Badge","new_question":"Create new Question","new_test":"Create new Test","send":"Send","show":"Show","sign_in":"Sign in","sign_up":"Sign up","start":"Go!","tests":"Back to Tests"},"mail":{"feedback":{"error":"There are some issues","sended":"Your feddback has been send","subject":"Mail from:"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"placeholder":{"email":"Enter Email"},"shared":{"errors":{"header":{"one":"%{count} error detected","other":"%{count} errors detected"}}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"test_passage":{"fail":"Test failed","pass":"Test passed"},"test_passages":{"result":{"header":"Test %{title} was complited","result":"Result"},"show":{"header":"You passind %{title} Test Now","send":"Send Answer(s)"}},"tests":{"index":{"actions":"Start","category":"Category","header":"Tests","level":"Level","questions":"Questions","title":"Title"}},"tests_mailer":{"completed_test":{"subject":"You just completed the test."}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {"activerecord":{"attributes":{"test":{"category":"Категория","level":"Уровень","title":"Название"}},"errors":{"messages":{"blank":"не может быть пустым","record_invalid":"Возникли ошибки: %{errors}","restrict_dependent_destroy":{"has_many":"Невозможно удалить запись, так как существуют зависимости: %{record}","has_one":"Невозможно удалить запись, так как существует зависимость: %{record}"}}},"models":"Тест"},"admin":{"answers":{"edit":{"header":"Изменить ответ"},"new":{"header":"Новый ответ"},"show":{"header":"Ответы"}},"badges":{"create":{"success":"Бейдж успешно создан"}},"tests":{"create":{"success":"Тест успешно создан"},"edit":{"header":"Изменить тест: %{title}"},"form_inline":{"submit":"ОК"},"index":{"actions":"Действия","category":"Категория","header":"Редактировать тесты","level":"Уровень","questions":"Вопросы","title":"Название"},"new":{"header":"Создать Тест"}}},"date":{"abbr_day_names":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"abbr_month_names":[null,"янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],"day_names":["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],"formats":{"default":"%d.%m.%Y","long":"%-d %B %Y","short":"%-d %b"},"month_names":[null,"января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"few":"около %{count} часов","many":"около %{count} часов","one":"около %{count} часа","other":"около %{count} часа"},"about_x_months":{"few":"около %{count} месяцев","many":"около %{count} месяцев","one":"около %{count} месяца","other":"около %{count} месяца"},"about_x_years":{"few":"около %{count} лет","many":"около %{count} лет","one":"около %{count} года","other":"около %{count} лет"},"almost_x_years":{"few":"почти %{count} года","many":"почти %{count} лет","one":"почти 1 год","other":"почти %{count} лет"},"half_a_minute":"меньше минуты","less_than_x_minutes":{"few":"меньше %{count} минут","many":"меньше %{count} минут","one":"меньше %{count} минуты","other":"меньше %{count} минуты"},"less_than_x_seconds":{"few":"меньше %{count} секунд","many":"меньше %{count} секунд","one":"меньше %{count} секунды","other":"меньше %{count} секунды"},"over_x_years":{"few":"больше %{count} лет","many":"больше %{count} лет","one":"больше %{count} года","other":"больше %{count} лет"},"x_days":{"few":"%{count} дня","many":"%{count} дней","one":"%{count} день","other":"%{count} дня"},"x_minutes":{"few":"%{count} минуты","many":"%{count} минут","one":"%{count} минуту","other":"%{count} минуты"},"x_months":{"few":"%{count} месяца","many":"%{count} месяцев","one":"%{count} месяц","other":"%{count} месяца"},"x_seconds":{"few":"%{count} секунды","many":"%{count} секунд","one":"%{count} секунду","other":"%{count} секунды"},"x_years":{"few":"%{count} года","many":"%{count} лет","one":"%{count} год","other":"%{count} года"}},"prompts":{"day":"День","hour":"Часов","minute":"Минут","month":"Месяц","second":"Секунд","year":"Год"}},"devise":{"confirmations":{"confirmed":"Ваша учётная запись подтверждена.","send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.","send_paranoid_instructions":"Если ваш электронный адрес есть в нашей базе данных, то в течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи."},"failure":{"already_authenticated":"Вы уже вошли в систему.","inactive":"Ваша учётная запись ещё не активирована.","invalid":"Неверный %{authentication_keys} или пароль.","last_attempt":"У вас осталась еще одна попытка ввести пароль до блокировки.","locked":"Ваша учётная запись заблокирована.","not_found_in_database":"Неверный %{authentication_keys} или пароль.","timeout":"Ваш сеанс закончился. Пожалуйста, войдите в систему снова.","unauthenticated":"Вам необходимо войти в систему или зарегистрироваться.","unconfirmed":"Вы должны подтвердить вашу учётную запись."},"mailer":{"confirmation_instructions":{"subject":"Инструкции по подтверждению учётной записи."},"email_changed":{"subject":"Электронный адрес был изменён."},"password_change":{"subject":"Пароль был изменён."},"reset_password_instructions":{"subject":"Инструкции по восстановлению пароля."},"unlock_instructions":{"subject":"Инструкции по разблокировке учётной записи."}},"omniauth_callbacks":{"failure":"Вы не можете войти в систему с учётной записью из %{kind}, так как \"%{reason}\".","success":"Вход в систему выполнен с учётной записью из %{kind}."},"passwords":{"no_token":"Эта страница доступна только при переходе по ссылке для сброса пароля. Если вы перешли по ссылке из письма, пожалуйста, убедитесь, что вы использовали полный URL.","send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.","send_paranoid_instructions":"Если ваш электронный адрес есть в нашей базе данных, то в течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.","updated":"Ваш пароль изменён. Теперь вы вошли в систему.","updated_not_active":"Пароль изменён."},"registrations":{"destroyed":"До свидания! Ваша учётная запись удалена. Надеемся снова увидеть вас.","new":{"header":"Регистрация"},"signed_up":"Добро пожаловать! Вы зарегистрировались.","signed_up_but_inactive":"Вы зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись ещё не активирована.","signed_up_but_locked":"Вы зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись заблокирована.","signed_up_but_unconfirmed":"В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.","update_needs_confirmation":"Ваш аккаунт обновлен, нонеобходимо подтвердить ваш новый электронный адрес. Пожалуйста, проверьте свою электронную почту и нажмите на ссылку \"Подтвердить\", чтобы завершить обновление.","updated":"Ваша учётная запись изменена."},"sessions":{"already_signed_out":"Выход из системы выполнен.","login":"Привет, %{first_name} %{last_name}!","new":{"header":"Войти в мир Гуру","submit":"Войти"},"signed_in":"Вход в систему выполнен.","signed_out":"Выход из системы выполнен."},"shared":{"links":{"confirmation":"Не пришло подтверждение?","forgot":"Восстановить пароль","sign_in":"Войти","sign_up":"Регистрация"}},"unlocks":{"send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по разблокировке вашей учётной записи.","send_paranoid_instructions":"Если ваша учётная запись существует, то в течение нескольких минут вы получите письмо с инструкциями по её разблокировке.","unlocked":"Ваша учётная запись разблокирована. Теперь вы вошли в систему."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"нужно подтвердить","already_confirmed":"уже подтверждена. Пожалуйста, попробуйте войти в систему","blank":"не может быть пустым","confirmation":"не совпадает со значением поля %{attribute}","confirmation_period_expired":"должен быть подтвержден в течении %{period}, пожалуйста, запросите подтверждение ещё раз","empty":"не может быть пустым","equal_to":"может иметь лишь значение, равное %{count}","even":"может иметь лишь нечетное значение","exclusion":"имеет зарезервированное значение","expired":"устарела. Пожалуйста, запросите новую","greater_than":"может иметь значение большее %{count}","greater_than_or_equal_to":"может иметь значение большее или равное %{count}","inclusion":"имеет непредусмотренное значение","invalid":"имеет неверное значение","less_than":"может иметь значение меньшее чем %{count}","less_than_or_equal_to":"может иметь значение меньшее или равное %{count}","model_invalid":"Возникли ошибки: %{errors}","not_a_number":"не является числом","not_an_integer":"не является целым числом","not_found":"не найдена","not_locked":"не заблокирована","not_saved":{"many":"Обанаружено %{count} ошибок","one":"Обнаружена %{count} ошибка","other":"Обанаружено %{count} ошибок"},"odd":"может иметь лишь четное значение","other_than":"должно отличаться от %{count}","present":"нужно оставить пустым","required":"не может отсутствовать","taken":"уже существует","too_long":{"few":"слишком большой длины (не может быть больше чем %{count} символа)","many":"слишком большой длины (не может быть больше чем %{count} символов)","one":"слишком большой длины (не может быть больше чем %{count} символ)","other":"слишком большой длины (не может быть больше чем %{count} символа)"},"too_short":{"few":"недостаточной длины (не может быть меньше %{count} символов)","many":"недостаточной длины (не может быть меньше %{count} символов)","one":"недостаточной длины (не может быть меньше %{count} символа)","other":"недостаточной длины (не может быть меньше %{count} символа)"},"wrong_length":{"few":"неверной длины (может быть длиной ровно %{count} символа)","many":"неверной длины (может быть длиной ровно %{count} символов)","one":"неверной длины (может быть длиной ровно %{count} символ)","other":"неверной длины (может быть длиной ровно %{count} символа)"}},"template":{"body":"Проблемы возникли со следующими полями:","header":{"few":"%{model}: сохранение не удалось из-за %{count} ошибок","many":"%{model}: сохранение не удалось из-за %{count} ошибок","one":"%{model}: сохранение не удалось из-за %{count} ошибки","other":"%{model}: сохранение не удалось из-за %{count} ошибки"}}},"feedbacks":{"new":{"header":"Будем рады получить от вас отзыв, "}},"gist":{"button":"Сохранить в Gist","description":"Вопрос %{title} из TestGuru","failure":"Во время сохранения gist произошла ошибка","success":"Gist %{link} успешно сохранен"},"hello":"Привет","helpers":{"label":{"answer":{"body":"Текст ответа:","correct":"Ответ верный?"},"question":{"body":"Тескт вопроса:"},"test":{"category_id":"Категория","level":"Уровень","title":"Название"},"user":{"email":"Адрес Email","first_name":"Имя","last_name":"Фамилия","password":"Пароль","password_confirmation":"Подтвердите Пароль","remember_me":"Запомнить"}},"select":{"prompt":"Выберите"},"submit":{"answer":{"create":"Добавить ответ","update":"Изменить ответ"},"create":"Создать %{model}","question":{"create":"Добавить вопрос","update":"Изменить вопрос"},"submit":"Сохранить %{model}","test":{"create":"Создать тест","update":"Обновить тест"},"update":"Сохранить %{model}"}},"i18n":{"plural":{"keys":["one","few","many","other"],"rule":{}},"transliterate":{"rule":{}}},"js":{"links":{"cancel":"Отмена","edit":"Изменить"}},"label":{"answer":"Ответы:","correct":"Верный ответ?","from":"Новый отзыв от: ","minpass":"Не менее %{length} символов","of":"из","questions":"Вопрос:","remember_me":"Запомнить меня"},"links":{"admin_panel":"Панель администратора","back":"Назад","badges":"Значки","cancel":"Отмена","confirm":"Вы уверены?","delete":"Удалить","edit":"Изменить","feedback":"Оставить отзыв","gists":"Посмотреть все Gist-ы","logout":"Выйти","new_answer":"Создать Ответ","new_badge":"Новый значок","new_question":"Создать Вопрос","new_test":"Создать Тест","send":"Отправить","show":"Просмотр","sign_in":"Войти","sign_up":"Регистрация","start":"Начать!","tests":"К списку Тестов"},"mail":{"feedback":{"error":"Возникла ошибка при отправке","sended":"Спасибо! Ваш отзыв успешно отправлен","subject":"Сообщение от:"}},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"руб."}},"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"few":"миллиардов","many":"миллиардов","one":"миллиард","other":"миллиардов"},"million":{"few":"миллионов","many":"миллионов","one":"миллион","other":"миллионов"},"quadrillion":{"few":"квадриллионов","many":"квадриллионов","one":"квадриллион","other":"квадриллионов"},"thousand":{"few":"тысяч","many":"тысяч","one":"тысяча","other":"тысяч"},"trillion":{"few":"триллионов","many":"триллионов","one":"триллион","other":"триллионов"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":false,"strip_insignificant_zeros":false},"storage_units":{"format":"%n %u","units":{"byte":{"few":"байта","many":"байт","one":"байт","other":"байта"},"gb":"ГБ","kb":"КБ","mb":"МБ","tb":"ТБ"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"placeholder":{"email":"Введите Email"},"shared":{"errors":{"header":{"few":"Обнаружено %{count} ошибки","many":"Обнаружено %{count} ошибок","one":"Обнаружена %{count} ошибка","other":"Обнаружено %{count} ошибки"}}},"support":{"array":{"last_word_connector":" и ","two_words_connector":" и ","words_connector":", "}},"test_passage":{"fail":"Тест не пройден","pass":"Тест пройден"},"test_passages":{"completed_test":{"subject":"Вы только что заврешили тест"},"result":{"header":"Тест %{title} успешно завершен","result":"Ваш результат"},"show":{"header":"Сейчас вы проходите %{title} тест","send":"Ответить"},"tests_mailer":null},"tests":{"index":{"actions":"Вы готовы?","category":"Категория","header":"Доступные тесты","level":"Уровень","questions":"Вопросы","title":"Название"}},"time":{"am":"утра","formats":{"default":"%a, %d %b %Y, %H:%M:%S %z","long":"%d %B %Y, %H:%M","short":"%d %b, %H:%M"},"pm":"вечера"}});
