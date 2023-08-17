function convertAndCheckTime(apiDateTime: string): { formattedDateTime: string; hasPassedThreeHours: boolean } {
  const parsedDateTime = new Date(apiDateTime);

  // Ajustando para o fuso horário do Brasil
  parsedDateTime.setHours(parsedDateTime.getHours() - 3); // Convertendo de UTC para BRT (GMT-3)

  const currentTime = new Date();
  const threeHoursAgo = new Date(currentTime);
  threeHoursAgo.setHours(threeHoursAgo.getHours() - 3); // Subtraindo 3 horas da hora atual

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDateTime = formatter.format(parsedDateTime);
  const hasPassedThreeHours = parsedDateTime < threeHoursAgo;

  return { formattedDateTime, hasPassedThreeHours };
}

export default convertAndCheckTime
