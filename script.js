'use strict';

const scenarios = {
  leads: {
    input: '«Хочу сайт для своей студии. С чего начать?»',
    action: 'Уточняет задачу, собирает контакты и сохраняет детали.',
    result: 'Заявка в CRM. Уведомление в Telegram. Контекст под рукой.',
  },
  support: {
    input: '«Как подключить ваш сервис к моему сайту?»',
    action: 'Находит ответ в вашей базе знаний и объясняет шаги подключения.',
    result: 'Клиент получает инструкцию. Сложный вопрос передаётся человеку.',
  },
  booking: {
    input: '«Есть свободное время на консультацию в пятницу?»',
    action: 'Проверяет расписание и предлагает доступное время.',
    result: 'Запись в календаре. Подтверждение клиенту. Напоминание перед встречей.',
  },
};

document.querySelectorAll('[data-scenario]').forEach((button) => {
  button.addEventListener('click', () => {
    const scenario = scenarios[button.dataset.scenario];
    if (!scenario) return;
    document.querySelectorAll('[data-scenario]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.getElementById('demo-input').textContent = scenario.input;
    document.getElementById('demo-action').textContent = scenario.action;
    document.getElementById('demo-result').textContent = scenario.result;
  });
});
