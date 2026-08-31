// TODO: Preencher com os dados reais de formação acadêmica de Murilo.
// Não inventar instituições, cursos ou datas. Substitua os campos abaixo.

export type Education = {
  institution: string;
  course: string;
  period: string;
  status: "Em andamento" | "Concluído" | "Trancado";
  description?: string;
};

export const education: Education[] = [
  {
    institution: "FATEC Itu",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "ago/2021 - interrompido",
    status: "Trancado",
    description:
      "Curso superior incompleto, com estudos voltados ao desenvolvimento e à análise de sistemas.",
  },
];
