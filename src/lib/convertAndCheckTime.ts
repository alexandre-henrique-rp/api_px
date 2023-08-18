function convertAndCheckTime(apiDateTime: string): { formattedDateTime: string; hasPassedThreeHours: boolean } {
  const parsedApiDateTime = new Date(apiDateTime);

  // Obtendo o tempo atual
  const currentTime = new Date();

  // Verificando se passaram mais de três horas desde a apiDateTime
  const hasPassedThreeHours = currentTime.getTime() - parsedApiDateTime.getTime() > 3 * 60 * 60 * 1000;

  // Formatador de data e hora
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Formatação da data e hora da API para o formato local
  const formattedDateTime = formatter.format(parsedApiDateTime);

  return { formattedDateTime, hasPassedThreeHours };
}

export default convertAndCheckTime;
