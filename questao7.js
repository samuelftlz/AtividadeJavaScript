function obterAtividadeDoDia(diaDaSemana) {
    let atividade = "";
  
    switch (diaDaSemana.toUpperCase()) {
      case "SEGUNDA":
        atividade = "REUNIÃO";
        break;
      case "TERÇA":
        atividade = "PALESTRA";
        break;
      case "QUARTA":
        atividade = "WORKSHOP";
        break;
      case "QUINTA":
        atividade = "TRABALHO REMOTO";
        break;
      case "SEXTA":
        atividade = "AGENDAMENTO SEMANAL";
        break;
      case "SÁBADO":
        atividade = "SHOPPING";
        break;
      case "DOMINGO":
        atividade = "PRAIA";
        break;
      default:
        atividade = "Dia desconhecido";
    }
  
    console.log(atividade);
  }
  
  obterAtividadeDoDia("segunda");
  obterAtividadeDoDia("quinta");
  obterAtividadeDoDia("feriado");
  