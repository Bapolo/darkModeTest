document.addEventListener("DOMContentLoaded", () =>
{
	
	const btn = document.querySelector('#btn');
	const body = document.querySelector('#body');

	btn.innerText = "Light";

	btn.addEventListener('click', () =>
	{
		if (body.classList.contains('dark-mode'))
		{
			body.classList.remove('dark-mode');
			btn.innerText = 'Dark';
		}
		else
		{
			body.classList.add('dark-mode');
			btn.innerText = 'Light';
		}

		
		
	})
})