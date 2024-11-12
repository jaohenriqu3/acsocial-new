const usuarios = [
    {
      nome: 'João',
      sobrenome: 'Silva',
      categoria: 'Usuário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro',
      profissao: 'Desenvolvedor',
      cpf: '123.456.789-00',
      rg: 'MG-12.345.678',
      cep: '12345-678',
      endereco: 'Rua Exemplo, 123',
      numero: '12',
      complemento: 'Apt 101',
      bairro: 'Centro',
      cidade: 'Belo Horizonte',
      estado: 'MG'
    },
    {
      nome: 'Maria',
      sobrenome: 'Pereira',
      categoria: 'Estagiário',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada',
      profissao: 'Designer',
      cpf: '987.654.321-00',
      rg: 'SP-98.765.432',
      cep: '87654-321',
      endereco: 'Avenida Exemplo, 456',
      numero: '34',
      complemento: 'Casa',
      bairro: 'Jardim',
      cidade: 'São Paulo',
      estado: 'SP'
    },
    {
      nome: 'Carlos',
      sobrenome: 'Almeida',
      categoria: 'Estagiário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Divorciado',
      profissao: 'Engenheiro',
      cpf: '321.654.987-10',
      rg: 'RJ-56.789.123',
      cep: '54321-987',
      endereco: 'Rua das Palmeiras, 78',
      numero: '78',
      complemento: 'Bloco B',
      bairro: 'Santa Teresa',
      cidade: 'Rio de Janeiro',
      estado: 'RJ'
    },
    {
      nome: 'Ana',
      sobrenome: 'Souza',
      categoria: 'Voluntário',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Viúva',
      profissao: 'Professora',
      cpf: '789.123.456-99',
      rg: 'RS-22.334.556',
      cep: '99887-665',
      endereco: 'Rua da Educação, 22',
      numero: '101',
      complemento: '',
      bairro: 'Liberdade',
      cidade: 'Porto Alegre',
      estado: 'RS'
    },
    {
      nome: 'Bruno',
      sobrenome: 'Fernandes',
      categoria: 'Usuário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro',
      profissao: 'Médico',
      cpf: '555.666.777-88',
      rg: 'PR-11.223.344',
      cep: '44567-890',
      endereco: 'Avenida Central, 456',
      numero: '20',
      complemento: 'Cobertura',
      bairro: 'Águas Claras',
      cidade: 'Curitiba',
      estado: 'PR'
    },
    {
      nome: 'Luciana',
      sobrenome: 'Oliveira',
      categoria: 'Voluntário',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira',
      profissao: 'Advogada',
      cpf: '444.555.666-00',
      rg: 'PE-77.888.999',
      cep: '33444-555',
      endereco: 'Rua dos Advogados, 89',
      numero: '50',
      complemento: '',
      bairro: 'Recife Antigo',
      cidade: 'Recife',
      estado: 'PE'
    },
    {
      nome: 'Paulo',
      sobrenome: 'Gomes',
      categoria: 'Estagiário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado',
      profissao: 'Empresário',
      cpf: '222.333.444-55',
      rg: 'SP-44.555.666',
      cep: '22111-223',
      endereco: 'Rua das Empresas, 101',
      numero: '101',
      complemento: 'Sala 202',
      bairro: 'Centro',
      cidade: 'Campinas',
      estado: 'SP'
    },
    {
      nome: 'Camila',
      sobrenome: 'Menezes',
      categoria: 'Usuário',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira',
      profissao: 'Dentista',
      cpf: '888.999.000-11',
      rg: 'SC-33.444.555',
      cep: '55443-221',
      endereco: 'Rua dos Sorrisos, 150',
      numero: '25',
      complemento: 'Loft 2',
      bairro: 'Trindade',
      cidade: 'Florianópolis',
      estado: 'SC'
    },
    {
      nome: 'Fernando',
      sobrenome: 'Ramos',
      categoria: 'Voluntário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado',
      profissao: 'Mecânico',
      cpf: '666.777.888-99',
      rg: 'GO-55.666.777',
      cep: '77889-990',
      endereco: 'Avenida das Oficinas, 500',
      numero: '33',
      complemento: '',
      bairro: 'Industrial',
      cidade: 'Goiânia',
      estado: 'GO'
    },
    {
      nome: 'Beatriz',
      sobrenome: 'Lima',
      categoria: 'Estagiário',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira',
      profissao: 'Arquiteta',
      cpf: '999.000.111-22',
      rg: 'BA-12.345.678',
      cep: '11223-344',
      endereco: 'Rua das Artes, 300',
      numero: '90',
      complemento: '',
      bairro: 'Pelourinho',
      cidade: 'Salvador',
      estado: 'BA'
    },
    {
      nome: 'Rodrigo',
      sobrenome: 'Santos',
      categoria: 'Voluntário',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Divorciado',
      profissao: 'Publicitário',
      cpf: '777.888.999-00',
      rg: 'DF-66.777.888',
      cep: '77665-443',
      endereco: 'Esplanada dos Ministérios, 1',
      numero: '1',
      complemento: '',
      bairro: 'Asa Norte',
      cidade: 'Brasília',
      estado: 'DF'
    }
  ];
  
  
  // Função para popular a tabela
  function populateTable() {
    const tableBody = document.getElementById('user-table');
    tableBody.innerHTML = '';
  
    usuarios.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.sobrenome}</td>
        <td>${user.categoria}</td>
        <td><button class="button-pop" onclick="showDetails(${index})">Ver Mais</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Função para mostrar o pop-up com detalhes do usuário
  function showDetails(index) {
    const user = usuarios[index];
    const details = `
      <strong>Nome:</strong> ${user.nome} <br>
      <strong>Sobrenome:</strong> ${user.sobrenome} <br>
      <strong>Nacionalidade:</strong> ${user.nacionalidade} <br>
      <strong>Estado Civil:</strong> ${user.estadoCivil} <br>
      <strong>Profissão:</strong> ${user.profissao} <br>
      <strong>CPF:</strong> ${user.cpf} <br>
      <strong>RG:</strong> ${user.rg} <br>
      <strong>Endereço:</strong> ${user.endereco}, ${user.numero}, ${user.complemento}, ${user.bairro} <br>
      <strong>CEP:</strong> ${user.cep} <br>
      <strong>Cidade:</strong> ${user.cidade} <br>
      <strong>Estado:</strong> ${user.estado}
    `;
    document.getElementById('user-details').innerHTML = details;
    document.getElementById('user-popup').style.display = 'flex';
  }
  
  // Função para fechar o pop-up
  function closePopup() {
    document.getElementById('user-popup').style.display = 'none';
  }
  
  // Inicializar a tabela ao carregar a página
  window.onload = populateTable;
  
  
  // Função para popular a tabela
  function populateTable() {
    const tableBody = document.getElementById('user-table');
    tableBody.innerHTML = '';
  
    usuarios.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.sobrenome}</td>
        <td>${user.categoria}</td>
        <td><button class="button" onclick="showDetails(${index})">Ver Mais</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Função para mostrar o pop-up com detalhes do usuário
  function showDetails(index) {
    const user = usuarios[index];
    const details = `
      <strong>Nome:</strong> ${user.nome} <br>
      <strong>Sobrenome:</strong> ${user.sobrenome} <br>
      <strong>Nacionalidade:</strong> ${user.nacionalidade} <br>
      <strong>Estado Civil:</strong> ${user.estadoCivil} <br>
      <strong>Profissão:</strong> ${user.profissao} <br>
      <strong>CPF:</strong> ${user.cpf} <br>
      <strong>RG:</strong> ${user.rg} <br>
      <strong>Endereço:</strong> ${user.endereco}, ${user.numero}, ${user.complemento}, ${user.bairro} <br>
      <strong>CEP:</strong> ${user.cep} <br>
      <strong>Cidade:</strong> ${user.cidade} <br>
      <strong>Estado:</strong> ${user.estado}
    `;
    document.getElementById('user-details').innerHTML = details;
    document.getElementById('user-popup').style.display = 'flex';
  }
  
  // Função para fechar o pop-up
  function closePopup() {
    document.getElementById('user-popup').style.display = 'none';
  }
  
  // Inicializar a tabela ao carregar a página
  window.onload = populateTable;
  
  
  // Função para popular a tabela com dados
  function populateTable() {
    const tableBody = document.getElementById('user-table');
    tableBody.innerHTML = '';
  
    usuarios.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.sobrenome}</td>
        <td>${user.categoria}</td>
        <td><button class="button" onclick="showDetails(${index})">Ver Mais</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Função para exibir o pop-up com detalhes
  function showDetails(index) {
    const user = usuarios[index];
    const details = `
      <strong>Nome:</strong> ${user.nome} <br>
      <strong>Sobrenome:</strong> ${user.sobrenome} <br>
      <strong>Nacionalidade:</strong> ${user.nacionalidade} <br>
      <strong>Estado Civil:</strong> ${user.estadoCivil} <br>
      <strong>Profissão:</strong> ${user.profissao} <br>
      <strong>CPF:</strong> ${user.cpf} <br>
      <strong>RG:</strong> ${user.rg} <br>
      <strong>Endereço:</strong> ${user.endereco}, ${user.numero}, ${user.complemento}, ${user.bairro} <br>
      <strong>CEP:</strong> ${user.cep} <br>
      <strong>Cidade:</strong> ${user.cidade} <br>
      <strong>Estado:</strong> ${user.estado}
    `;
    document.getElementById('user-details').innerHTML = details;
    document.getElementById('user-popup').style.display = 'flex';
  }
  
  // Função para fechar o pop-up
  function closePopup() {
    document.getElementById('user-popup').style.display = 'none';
  }
  
  // Inicializar tabela ao carregar a página
  window.onload = populateTable;
  