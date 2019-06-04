const QUOTE_LIST = [
  `Chaque année en France, un habitant produit 354 kg d’ordures ménagères.`,
  `324,5 millions de tonnes : c'est la quantité de déchets produits en France en 2015.`,
  `Un roubaisien produit en moyenne 366kg de déchets par an.`,
  `En 2015, la déforestation a concerné près de 30 millions d'hectares (soit l'équivalent de la superficie de la Nouvelle-Zélande)`,
  `En 30 ans, les ressources naturelles de la planète ont diminué de 30%.`,
  `400 millions de tonnes de produits chimiques sont produites chaque année. Ce ne sont pas moins de 1.000 nouvelles substances chimiques qui voient le jour tous les ans.`,
  `Deux fois plus de personnes allergiques au pollen qu’il y a trente-cinq ans (les scientifiques soulignent que le niveau de pollution et le nombre de personnes allergiques ont crû au même rythme)`,
  `Selon les Nations-Unies, 41,8 millions de tonnes de déchets électroniques et électriques ont été produits ee 2014, au niveau mondial.`,
  `190 000 litres d’eau potable sont perdus toutes les 5 secondes en France.`,
  `Chaque français reçoit en moyenne 40kg de prospectus publicitaire dans sa boîte aux lettres (soit 830 000 tonnes de papier qui finissent souvent à la poubelle).`,
  `20kg : c'est le poids de la nourriture jetée par an et par habitant en France. Cela correspond à 7 kg d’aliments encore emballés et 13 kg de restes de repas, de fruits et légumes abîmés et non consommés`,
]

export const getQuote = () => {
  const random = Math.floor(Math.random() * QUOTE_LIST.length)
  return QUOTE_LIST[random]
}