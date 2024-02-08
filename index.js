const perguntas = [
    {
      pergunta: "Qual é a equação que descreve o movimento uniformemente acelerado?",
      respostas: [
        "v = u + at",
        "F = ma",
        "P = VI",
      ],
      correta: 0
    },
    {
      pergunta: "Como a entropia é definida na termodinâmica?",
      respostas: [
        "Medida da desordem de um sistema",
        "Taxa de variação da velocidade em relação ao tempo",
        "Energia cinética média das partículas em um sistema",
      ],
      correta: 0
    },
    {
      pergunta: "O que a regra da mão direita representa no eletromagnetismo?",
      respostas: [
        "Relacionada ao movimento de partículas carregadas em um campo magnético",
        "Descreve a relação entre força, massa e aceleração",
        "Define a conservação da quantidade de movimento",
      ],
      correta: 0
    },
    {
      pergunta: "O que é a lei zero da termodinâmica?",
      respostas: [
        "As energias internas de dois sistemas em equilíbrio térmico são iguais",
        "A energia total de um sistema isolado é constante",
        "A pressão de um gás é inversamente proporcional ao seu volume",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um ciclo termodinâmico?",
      respostas: [
        "Uma trajetória fechada no espaço",
        "Movimento uniforme de um corpo",
        "Ondas eletromagnéticas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o efeito Joule?",
      respostas: [
        "Aumento da temperatura devido à compressão adiabática",
        "Aquecimento devido à passagem de corrente elétrica",
        "Refração de luz em um meio transparente",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um campo elétrico?",
      respostas: [
        "Região do espaço onde partículas carregadas sofrem uma força",
        "Descreve a relação entre temperatura e pressão",
        "Movimento uniforme de um corpo",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma onda eletromagnética?",
      respostas: [
        "Uma onda sonora em um meio sólido",
        "Ondas de luz em um meio transparente",
        "Vibração de partículas em um fluido",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o princípio da conservação da carga elétrica?",
      respostas: [
        "A carga elétrica de um sistema isolado é constante",
        "A corrente elétrica é diretamente proporcional à resistência",
        "A força elétrica é inversamente proporcional à distância entre as cargas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a definição de trabalho na física?",
      respostas: [
        "Deslocamento de um objeto em relação ao tempo",
        "Força aplicada em uma direção específica",
        "Transferência de energia devido à aplicação de uma força",
      ],
      correta: 2
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  if (mostrarTotal) {
      mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  }
  //loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estCorreta) {
          corretas.add(item)
        }
        mostraTotal.textContent = corretas.size + ' de ' +    totalDePerguntas
      
      } 
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem) 
  }
