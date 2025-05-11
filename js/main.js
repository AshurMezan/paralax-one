function isFirefox() {
  // Проверяем все возможные признаки Firefox
  return typeof InstallTrigger !== 'undefined' || 
         navigator.userAgent.includes('Firefox') ||
         (navigator.userAgent.includes('Gecko/') && !/Chrome|Chromium|Safari|Edg|OPR/.test(navigator.userAgent));
}

// Показываем сообщение с задержкой только в Firefox
if (isFirefox()) {
  setTimeout(() => {
    Swal.fire({
      title: '<strong style="font-size: 24px;">Важное сообщение</strong>',
      icon: 'info',
      html: `
        <div style="font-size: 16px; line-height: 1.6; max-width: 600px;">
          <p style="text-align: center; font-weight: bold; margin-bottom: 20px;">
            Добрый день!
          </p>
          <p style="margin-bottom: 15px;">
            Это учебный проект с параллакс-эффектами.
          </p>
          <p style="margin-bottom: 15px;">
            ❗❗❗Браузеры на движке <strong>Gecko (Mozilla Firefox)</strong> пока не поддерживают 
            современные CSS-свойства <code>animation-timeline</code> и <code>scroll()</code>, 
            используемые в этом проекте.
          </p>
          <p>
            Для полного функционала рекомендуем открыть страницу в <strong>Google Chrome</strong> 
            или <strong>Microsoft Edge</strong>.
          </p>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: 'Понятно',
      confirmButtonColor: '#3085d6',
      width: '700px',
      backdrop: `
        rgba(0,0,0,0.7)
        url("https://media.giphy.com/media/3o7TKsrfldgW9MfH84/giphy.gif")
        center left
        no-repeat
      `
    });
  }, 3000);
}