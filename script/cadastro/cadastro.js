document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
  
    submitButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o comportamento padrão do botão
  
      // Coletar os valores do formulário
      const formData = {
        nome: document.querySelector('#nome').value,
        sobrenome: document.querySelector('#sobrenome').value,
        nacionalidade: document.querySelector('#nacionalidade').value,
        estadoCivil: document.querySelector('#estado-civil').value,
        profissao: document.querySelector('#profissao').value,
        cpf: document.querySelector('#cpf').value,
        rg: document.querySelector('#rg').value,
        cep: document.querySelector('#cep').value,
        endereco: document.querySelector('#endereco').value,
        numero: document.querySelector('#numero').value,
        complemento: document.querySelector('#complemento').value,
        estado: document.querySelector('#estado').value,
        cidade: document.querySelector('#cidade').value,
        bairro: document.querySelector('#bairro').value,
      };
  
      // Enviar os dados ao servidor usando fetch
      fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message); // Mostra mensagem de sucesso
          // Limpar o formulário
          document.querySelectorAll('input').forEach(input => input.value = '');
        })
        .catch((error) => {
          console.error('Erro:', error);
          alert('Erro ao enviar os dados. Por favor, tente novamente.');
        });
    });
  });
  