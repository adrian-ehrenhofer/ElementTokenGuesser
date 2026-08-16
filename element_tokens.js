// Tokenization was done with the Mistral 7B v0.1 tokenizer in a separate Python script; refer to the scientific publication (https://doi.org/10.1002/adem.202501876) and the official scientific repository (https://github.com/ehrenhofer-group/LLM_Material_Property_Benchmark or https://doi.org/10.5281/zenodo.17136022) for details.
const elementData = [
  {
    "atomic_number": 1,
    "symbol": "H",
    "name_en": "Hydrogen",
    "name_de": "Wasserstoff",
    "group": 1,
    "period": 1,
    "series": "Nonmetals",
    "tokens_de": [
      "▁Wasser",
      "st",
      "off"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁H",
      "ydro",
      "gen"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁H"
    ],
    "token_count_symbol": 1,
    "description_de": "Wasserstoff (H, Ordnungszahl 1) wird in 3 Token(s) zerlegt: ['▁Wasser', 'st', 'off']."
  },
  {
    "atomic_number": 2,
    "symbol": "He",
    "name_en": "Helium",
    "name_de": "Helium",
    "group": 18,
    "period": 1,
    "series": "Noble gases",
    "tokens_de": [
      "▁Hel",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Hel",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁He"
    ],
    "token_count_symbol": 1,
    "description_de": "Helium (He, Ordnungszahl 2) wird in 2 Token(s) zerlegt: ['▁Hel', 'ium']."
  },
  {
    "atomic_number": 3,
    "symbol": "Li",
    "name_en": "Lithium",
    "name_de": "Lithium",
    "group": 1,
    "period": 2,
    "series": "Alkali metals",
    "tokens_de": [
      "▁L",
      "ith",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁L",
      "ith",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Li"
    ],
    "token_count_symbol": 1,
    "description_de": "Lithium (Li, Ordnungszahl 3) wird in 3 Token(s) zerlegt: ['▁L', 'ith', 'ium']."
  },
  {
    "atomic_number": 4,
    "symbol": "Be",
    "name_en": "Beryllium",
    "name_de": "Beryllium",
    "group": 2,
    "period": 2,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁B",
      "ery",
      "ll",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁B",
      "ery",
      "ll",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Be"
    ],
    "token_count_symbol": 1,
    "description_de": "Beryllium (Be, Ordnungszahl 4) wird in 4 Token(s) zerlegt: ['▁B', 'ery', 'll', 'ium']."
  },
  {
    "atomic_number": 5,
    "symbol": "B",
    "name_en": "Boron",
    "name_de": "Bor",
    "group": 13,
    "period": 2,
    "series": "Metalloids",
    "tokens_de": [
      "▁Bor"
    ],
    "token_count_de": 1,
    "tokens_en": [
      "▁Bor",
      "on"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁B"
    ],
    "token_count_symbol": 1,
    "description_de": "Bor (B, Ordnungszahl 5) wird in 1 Token(s) zerlegt: ['▁Bor']."
  },
  {
    "atomic_number": 6,
    "symbol": "C",
    "name_en": "Carbon",
    "name_de": "Kohlenstoff",
    "group": 14,
    "period": 2,
    "series": "Nonmetals",
    "tokens_de": [
      "▁K",
      "oh",
      "len",
      "st",
      "off"
    ],
    "token_count_de": 5,
    "tokens_en": [
      "▁Car",
      "bon"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁C"
    ],
    "token_count_symbol": 1,
    "description_de": "Kohlenstoff (C, Ordnungszahl 6) wird in 5 Token(s) zerlegt: ['▁K', 'oh', 'len', 'st', 'off']."
  },
  {
    "atomic_number": 7,
    "symbol": "N",
    "name_en": "Nitrogen",
    "name_de": "Stickstoff",
    "group": 15,
    "period": 2,
    "series": "Nonmetals",
    "tokens_de": [
      "▁St",
      "ick",
      "st",
      "off"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁N",
      "it",
      "rogen"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁N"
    ],
    "token_count_symbol": 1,
    "description_de": "Stickstoff (N, Ordnungszahl 7) wird in 4 Token(s) zerlegt: ['▁St', 'ick', 'st', 'off']."
  },
  {
    "atomic_number": 8,
    "symbol": "O",
    "name_en": "Oxygen",
    "name_de": "Sauerstoff",
    "group": 16,
    "period": 2,
    "series": "Nonmetals",
    "tokens_de": [
      "▁S",
      "auer",
      "st",
      "off"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁O",
      "xygen"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁O"
    ],
    "token_count_symbol": 1,
    "description_de": "Sauerstoff (O, Ordnungszahl 8) wird in 4 Token(s) zerlegt: ['▁S', 'auer', 'st', 'off']."
  },
  {
    "atomic_number": 9,
    "symbol": "F",
    "name_en": "Fluorine",
    "name_de": "Fluor",
    "group": 17,
    "period": 2,
    "series": "Halogens",
    "tokens_de": [
      "▁Fl",
      "u",
      "or"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Fl",
      "u",
      "or",
      "ine"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁F"
    ],
    "token_count_symbol": 1,
    "description_de": "Fluor (F, Ordnungszahl 9) wird in 3 Token(s) zerlegt: ['▁Fl', 'u', 'or']."
  },
  {
    "atomic_number": 10,
    "symbol": "Ne",
    "name_en": "Neon",
    "name_de": "Neon",
    "group": 18,
    "period": 2,
    "series": "Noble gases",
    "tokens_de": [
      "▁Ne",
      "on"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ne",
      "on"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ne"
    ],
    "token_count_symbol": 1,
    "description_de": "Neon (Ne, Ordnungszahl 10) wird in 2 Token(s) zerlegt: ['▁Ne', 'on']."
  },
  {
    "atomic_number": 11,
    "symbol": "Na",
    "name_en": "Sodium",
    "name_de": "Natrium",
    "group": 1,
    "period": 3,
    "series": "Alkali metals",
    "tokens_de": [
      "▁Nat",
      "rium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁S",
      "od",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Na"
    ],
    "token_count_symbol": 1,
    "description_de": "Natrium (Na, Ordnungszahl 11) wird in 2 Token(s) zerlegt: ['▁Nat', 'rium']."
  },
  {
    "atomic_number": 12,
    "symbol": "Mg",
    "name_en": "Magnesium",
    "name_de": "Magnesium",
    "group": 2,
    "period": 3,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁Magn",
      "es",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Magn",
      "es",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁M",
      "g"
    ],
    "token_count_symbol": 2,
    "description_de": "Magnesium (Mg, Ordnungszahl 12) wird in 3 Token(s) zerlegt: ['▁Magn', 'es', 'ium']."
  },
  {
    "atomic_number": 13,
    "symbol": "Al",
    "name_en": "Aluminum",
    "name_de": "Aluminium",
    "group": 13,
    "period": 3,
    "series": "Poor metals",
    "tokens_de": [
      "▁Al",
      "umin",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Al",
      "umin",
      "um"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Al"
    ],
    "token_count_symbol": 1,
    "description_de": "Aluminium (Al, Ordnungszahl 13) wird in 3 Token(s) zerlegt: ['▁Al', 'umin', 'ium']."
  },
  {
    "atomic_number": 14,
    "symbol": "Si",
    "name_en": "Silicon",
    "name_de": "Silicium",
    "group": 14,
    "period": 3,
    "series": "Metalloids",
    "tokens_de": [
      "▁Sil",
      "ic",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Sil",
      "icon"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Si"
    ],
    "token_count_symbol": 1,
    "description_de": "Silicium (Si, Ordnungszahl 14) wird in 3 Token(s) zerlegt: ['▁Sil', 'ic', 'ium']."
  },
  {
    "atomic_number": 15,
    "symbol": "P",
    "name_en": "Phosphorus",
    "name_de": "Phosphor",
    "group": 15,
    "period": 3,
    "series": "Nonmetals",
    "tokens_de": [
      "▁Ph",
      "osph",
      "or"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ph",
      "osph",
      "orus"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁P"
    ],
    "token_count_symbol": 1,
    "description_de": "Phosphor (P, Ordnungszahl 15) wird in 3 Token(s) zerlegt: ['▁Ph', 'osph', 'or']."
  },
  {
    "atomic_number": 16,
    "symbol": "S",
    "name_en": "Sulfur",
    "name_de": "Schwefel",
    "group": 16,
    "period": 3,
    "series": "Nonmetals",
    "tokens_de": [
      "▁Schwe",
      "fel"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁S",
      "ulf",
      "ur"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁S"
    ],
    "token_count_symbol": 1,
    "description_de": "Schwefel (S, Ordnungszahl 16) wird in 2 Token(s) zerlegt: ['▁Schwe', 'fel']."
  },
  {
    "atomic_number": 17,
    "symbol": "Cl",
    "name_en": "Chlorine",
    "name_de": "Chlor",
    "group": 17,
    "period": 3,
    "series": "Halogens",
    "tokens_de": [
      "▁Ch",
      "lor"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ch",
      "lor",
      "ine"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Cl"
    ],
    "token_count_symbol": 1,
    "description_de": "Chlor (Cl, Ordnungszahl 17) wird in 2 Token(s) zerlegt: ['▁Ch', 'lor']."
  },
  {
    "atomic_number": 18,
    "symbol": "Ar",
    "name_en": "Argon",
    "name_de": "Argon",
    "group": 18,
    "period": 3,
    "series": "Noble gases",
    "tokens_de": [
      "▁Arg",
      "on"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Arg",
      "on"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ar"
    ],
    "token_count_symbol": 1,
    "description_de": "Argon (Ar, Ordnungszahl 18) wird in 2 Token(s) zerlegt: ['▁Arg', 'on']."
  },
  {
    "atomic_number": 19,
    "symbol": "K",
    "name_en": "Potassium",
    "name_de": "Kalium",
    "group": 1,
    "period": 4,
    "series": "Alkali metals",
    "tokens_de": [
      "▁Kal",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Pot",
      "ass",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁K"
    ],
    "token_count_symbol": 1,
    "description_de": "Kalium (K, Ordnungszahl 19) wird in 2 Token(s) zerlegt: ['▁Kal', 'ium']."
  },
  {
    "atomic_number": 20,
    "symbol": "Ca",
    "name_en": "Calcium",
    "name_de": "Calcium",
    "group": 2,
    "period": 4,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁Cal",
      "ci",
      "um"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Cal",
      "ci",
      "um"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ca"
    ],
    "token_count_symbol": 1,
    "description_de": "Calcium (Ca, Ordnungszahl 20) wird in 3 Token(s) zerlegt: ['▁Cal', 'ci', 'um']."
  },
  {
    "atomic_number": 21,
    "symbol": "Sc",
    "name_en": "Scandium",
    "name_de": "Scandium",
    "group": 3,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Sc",
      "and",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Sc",
      "and",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Sc"
    ],
    "token_count_symbol": 1,
    "description_de": "Scandium (Sc, Ordnungszahl 21) wird in 3 Token(s) zerlegt: ['▁Sc', 'and', 'ium']."
  },
  {
    "atomic_number": 22,
    "symbol": "Ti",
    "name_en": "Titanium",
    "name_de": "Titan",
    "group": 4,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Tit",
      "an"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Tit",
      "an",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ti"
    ],
    "token_count_symbol": 1,
    "description_de": "Titan (Ti, Ordnungszahl 22) wird in 2 Token(s) zerlegt: ['▁Tit', 'an']."
  },
  {
    "atomic_number": 23,
    "symbol": "V",
    "name_en": "Vanadium",
    "name_de": "Vanadium",
    "group": 5,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Van",
      "ad",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Van",
      "ad",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁V"
    ],
    "token_count_symbol": 1,
    "description_de": "Vanadium (V, Ordnungszahl 23) wird in 3 Token(s) zerlegt: ['▁Van', 'ad', 'ium']."
  },
  {
    "atomic_number": 24,
    "symbol": "Cr",
    "name_en": "Chromium",
    "name_de": "Chrom",
    "group": 6,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Ch",
      "rom"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ch",
      "rom",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Cr"
    ],
    "token_count_symbol": 1,
    "description_de": "Chrom (Cr, Ordnungszahl 24) wird in 2 Token(s) zerlegt: ['▁Ch', 'rom']."
  },
  {
    "atomic_number": 25,
    "symbol": "Mn",
    "name_en": "Manganese",
    "name_de": "Mangan",
    "group": 7,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁M",
      "ang",
      "an"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁M",
      "ang",
      "an",
      "ese"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁M",
      "n"
    ],
    "token_count_symbol": 2,
    "description_de": "Mangan (Mn, Ordnungszahl 25) wird in 3 Token(s) zerlegt: ['▁M', 'ang', 'an']."
  },
  {
    "atomic_number": 26,
    "symbol": "Fe",
    "name_en": "Iron",
    "name_de": "Eisen",
    "group": 8,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Eisen"
    ],
    "token_count_de": 1,
    "tokens_en": [
      "▁Iron"
    ],
    "token_count_en": 1,
    "tokens_symbol": [
      "▁Fe"
    ],
    "token_count_symbol": 1,
    "description_de": "Eisen (Fe, Ordnungszahl 26) wird in 1 Token(s) zerlegt: ['▁Eisen']."
  },
  {
    "atomic_number": 27,
    "symbol": "Co",
    "name_en": "Cobalt",
    "name_de": "Cobalt",
    "group": 9,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁C",
      "obal",
      "t"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁C",
      "obal",
      "t"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Co"
    ],
    "token_count_symbol": 1,
    "description_de": "Cobalt (Co, Ordnungszahl 27) wird in 3 Token(s) zerlegt: ['▁C', 'obal', 't']."
  },
  {
    "atomic_number": 28,
    "symbol": "Ni",
    "name_en": "Nickel",
    "name_de": "Nickel",
    "group": 10,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Nick",
      "el"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Nick",
      "el"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ni"
    ],
    "token_count_symbol": 1,
    "description_de": "Nickel (Ni, Ordnungszahl 28) wird in 2 Token(s) zerlegt: ['▁Nick', 'el']."
  },
  {
    "atomic_number": 29,
    "symbol": "Cu",
    "name_en": "Copper",
    "name_de": "Kupfer",
    "group": 11,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁K",
      "up",
      "fer"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Cop",
      "per"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Cu"
    ],
    "token_count_symbol": 1,
    "description_de": "Kupfer (Cu, Ordnungszahl 29) wird in 3 Token(s) zerlegt: ['▁K', 'up', 'fer']."
  },
  {
    "atomic_number": 30,
    "symbol": "Zn",
    "name_en": "Zinc",
    "name_de": "Zink",
    "group": 12,
    "period": 4,
    "series": "Transition metals",
    "tokens_de": [
      "▁Z",
      "ink"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Z",
      "inc"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Z",
      "n"
    ],
    "token_count_symbol": 2,
    "description_de": "Zink (Zn, Ordnungszahl 30) wird in 2 Token(s) zerlegt: ['▁Z', 'ink']."
  },
  {
    "atomic_number": 31,
    "symbol": "Ga",
    "name_en": "Gallium",
    "name_de": "Gallium",
    "group": 13,
    "period": 4,
    "series": "Poor metals",
    "tokens_de": [
      "▁Gall",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Gall",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ga"
    ],
    "token_count_symbol": 1,
    "description_de": "Gallium (Ga, Ordnungszahl 31) wird in 2 Token(s) zerlegt: ['▁Gall', 'ium']."
  },
  {
    "atomic_number": 32,
    "symbol": "Ge",
    "name_en": "Germanium",
    "name_de": "Germanium",
    "group": 14,
    "period": 4,
    "series": "Metalloids",
    "tokens_de": [
      "▁German",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁German",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ge"
    ],
    "token_count_symbol": 1,
    "description_de": "Germanium (Ge, Ordnungszahl 32) wird in 2 Token(s) zerlegt: ['▁German', 'ium']."
  },
  {
    "atomic_number": 33,
    "symbol": "As",
    "name_en": "Arsenic",
    "name_de": "Arsen",
    "group": 15,
    "period": 4,
    "series": "Metalloids",
    "tokens_de": [
      "▁Ar",
      "sen"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ar",
      "sen",
      "ic"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁As"
    ],
    "token_count_symbol": 1,
    "description_de": "Arsen (As, Ordnungszahl 33) wird in 2 Token(s) zerlegt: ['▁Ar', 'sen']."
  },
  {
    "atomic_number": 34,
    "symbol": "Se",
    "name_en": "Selenium",
    "name_de": "Selen",
    "group": 16,
    "period": 4,
    "series": "Nonmetals",
    "tokens_de": [
      "▁S",
      "elen"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁S",
      "elen",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Se"
    ],
    "token_count_symbol": 1,
    "description_de": "Selen (Se, Ordnungszahl 34) wird in 2 Token(s) zerlegt: ['▁S', 'elen']."
  },
  {
    "atomic_number": 35,
    "symbol": "Br",
    "name_en": "Bromine",
    "name_de": "Brom",
    "group": 17,
    "period": 4,
    "series": "Halogens",
    "tokens_de": [
      "▁B",
      "rom"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁B",
      "rom",
      "ine"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Br"
    ],
    "token_count_symbol": 1,
    "description_de": "Brom (Br, Ordnungszahl 35) wird in 2 Token(s) zerlegt: ['▁B', 'rom']."
  },
  {
    "atomic_number": 36,
    "symbol": "Kr",
    "name_en": "Krypton",
    "name_de": "Krypton",
    "group": 18,
    "period": 4,
    "series": "Noble gases",
    "tokens_de": [
      "▁K",
      "rypt",
      "on"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁K",
      "rypt",
      "on"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Kr"
    ],
    "token_count_symbol": 1,
    "description_de": "Krypton (Kr, Ordnungszahl 36) wird in 3 Token(s) zerlegt: ['▁K', 'rypt', 'on']."
  },
  {
    "atomic_number": 37,
    "symbol": "Rb",
    "name_en": "Rubidium",
    "name_de": "Rubidium",
    "group": 1,
    "period": 5,
    "series": "Alkali metals",
    "tokens_de": [
      "▁Rub",
      "id",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Rub",
      "id",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁R",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Rubidium (Rb, Ordnungszahl 37) wird in 3 Token(s) zerlegt: ['▁Rub', 'id', 'ium']."
  },
  {
    "atomic_number": 38,
    "symbol": "Sr",
    "name_en": "Strontium",
    "name_de": "Strontium",
    "group": 2,
    "period": 5,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁Str",
      "ont",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Str",
      "ont",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Sr"
    ],
    "token_count_symbol": 1,
    "description_de": "Strontium (Sr, Ordnungszahl 38) wird in 3 Token(s) zerlegt: ['▁Str', 'ont', 'ium']."
  },
  {
    "atomic_number": 39,
    "symbol": "Y",
    "name_en": "Yttrium",
    "name_de": "Yttrium",
    "group": 3,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Y",
      "tt",
      "rium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Y",
      "tt",
      "rium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Y"
    ],
    "token_count_symbol": 1,
    "description_de": "Yttrium (Y, Ordnungszahl 39) wird in 3 Token(s) zerlegt: ['▁Y', 'tt', 'rium']."
  },
  {
    "atomic_number": 40,
    "symbol": "Zr",
    "name_en": "Zirconium",
    "name_de": "Zirconium",
    "group": 4,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Z",
      "ir",
      "con",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Z",
      "ir",
      "con",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Z",
      "r"
    ],
    "token_count_symbol": 2,
    "description_de": "Zirconium (Zr, Ordnungszahl 40) wird in 4 Token(s) zerlegt: ['▁Z', 'ir', 'con', 'ium']."
  },
  {
    "atomic_number": 41,
    "symbol": "Nb",
    "name_en": "Niobium",
    "name_de": "Niob",
    "group": 5,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Ni",
      "ob"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ni",
      "ob",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁N",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Niob (Nb, Ordnungszahl 41) wird in 2 Token(s) zerlegt: ['▁Ni', 'ob']."
  },
  {
    "atomic_number": 42,
    "symbol": "Mo",
    "name_en": "Molybdenum",
    "name_de": "Molybdän",
    "group": 6,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Mol",
      "y",
      "bd",
      "än"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Mol",
      "y",
      "b",
      "den",
      "um"
    ],
    "token_count_en": 5,
    "tokens_symbol": [
      "▁Mo"
    ],
    "token_count_symbol": 1,
    "description_de": "Molybdän (Mo, Ordnungszahl 42) wird in 4 Token(s) zerlegt: ['▁Mol', 'y', 'bd', 'än']."
  },
  {
    "atomic_number": 43,
    "symbol": "Tc",
    "name_en": "Technetium",
    "name_de": "Technetium",
    "group": 7,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Tech",
      "net",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Tech",
      "net",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁T",
      "c"
    ],
    "token_count_symbol": 2,
    "description_de": "Technetium (Tc, Ordnungszahl 43) wird in 3 Token(s) zerlegt: ['▁Tech', 'net', 'ium']."
  },
  {
    "atomic_number": 44,
    "symbol": "Ru",
    "name_en": "Ruthenium",
    "name_de": "Ruthenium",
    "group": 8,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁R",
      "ut",
      "hen",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁R",
      "ut",
      "hen",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Ru"
    ],
    "token_count_symbol": 1,
    "description_de": "Ruthenium (Ru, Ordnungszahl 44) wird in 4 Token(s) zerlegt: ['▁R', 'ut', 'hen', 'ium']."
  },
  {
    "atomic_number": 45,
    "symbol": "Rh",
    "name_en": "Rhodium",
    "name_de": "Rhodium",
    "group": 9,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Rh",
      "od",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Rh",
      "od",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Rh"
    ],
    "token_count_symbol": 1,
    "description_de": "Rhodium (Rh, Ordnungszahl 45) wird in 3 Token(s) zerlegt: ['▁Rh', 'od', 'ium']."
  },
  {
    "atomic_number": 46,
    "symbol": "Pd",
    "name_en": "Palladium",
    "name_de": "Palladium",
    "group": 10,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁P",
      "all",
      "ad",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁P",
      "all",
      "ad",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁P",
      "d"
    ],
    "token_count_symbol": 2,
    "description_de": "Palladium (Pd, Ordnungszahl 46) wird in 4 Token(s) zerlegt: ['▁P', 'all', 'ad', 'ium']."
  },
  {
    "atomic_number": 47,
    "symbol": "Ag",
    "name_en": "Silver",
    "name_de": "Silber",
    "group": 11,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Sil",
      "ber"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Silver"
    ],
    "token_count_en": 1,
    "tokens_symbol": [
      "▁Ag"
    ],
    "token_count_symbol": 1,
    "description_de": "Silber (Ag, Ordnungszahl 47) wird in 2 Token(s) zerlegt: ['▁Sil', 'ber']."
  },
  {
    "atomic_number": 48,
    "symbol": "Cd",
    "name_en": "Cadmium",
    "name_de": "Cadmium",
    "group": 12,
    "period": 5,
    "series": "Transition metals",
    "tokens_de": [
      "▁Cad",
      "m",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Cad",
      "m",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁C",
      "d"
    ],
    "token_count_symbol": 2,
    "description_de": "Cadmium (Cd, Ordnungszahl 48) wird in 3 Token(s) zerlegt: ['▁Cad', 'm', 'ium']."
  },
  {
    "atomic_number": 49,
    "symbol": "In",
    "name_en": "Indium",
    "name_de": "Indium",
    "group": 13,
    "period": 5,
    "series": "Poor metals",
    "tokens_de": [
      "▁Ind",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ind",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁In"
    ],
    "token_count_symbol": 1,
    "description_de": "Indium (In, Ordnungszahl 49) wird in 2 Token(s) zerlegt: ['▁Ind', 'ium']."
  },
  {
    "atomic_number": 50,
    "symbol": "Sn",
    "name_en": "Tin",
    "name_de": "Zinn",
    "group": 14,
    "period": 5,
    "series": "Poor metals",
    "tokens_de": [
      "▁Z",
      "inn"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁T",
      "in"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Sn"
    ],
    "token_count_symbol": 1,
    "description_de": "Zinn (Sn, Ordnungszahl 50) wird in 2 Token(s) zerlegt: ['▁Z', 'inn']."
  },
  {
    "atomic_number": 51,
    "symbol": "Sb",
    "name_en": "Antimony",
    "name_de": "Antimon",
    "group": 15,
    "period": 5,
    "series": "Metalloids",
    "tokens_de": [
      "▁Ant",
      "im",
      "on"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ant",
      "im",
      "ony"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁S",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Antimon (Sb, Ordnungszahl 51) wird in 3 Token(s) zerlegt: ['▁Ant', 'im', 'on']."
  },
  {
    "atomic_number": 52,
    "symbol": "Te",
    "name_en": "Tellurium",
    "name_de": "Tellur",
    "group": 16,
    "period": 5,
    "series": "Metalloids",
    "tokens_de": [
      "▁Tell",
      "ur"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Tell",
      "ur",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Te"
    ],
    "token_count_symbol": 1,
    "description_de": "Tellur (Te, Ordnungszahl 52) wird in 2 Token(s) zerlegt: ['▁Tell', 'ur']."
  },
  {
    "atomic_number": 53,
    "symbol": "I",
    "name_en": "Iodine",
    "name_de": "Iod",
    "group": 17,
    "period": 5,
    "series": "Halogens",
    "tokens_de": [
      "▁I",
      "od"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁I",
      "od",
      "ine"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁I"
    ],
    "token_count_symbol": 1,
    "description_de": "Iod (I, Ordnungszahl 53) wird in 2 Token(s) zerlegt: ['▁I', 'od']."
  },
  {
    "atomic_number": 54,
    "symbol": "Xe",
    "name_en": "Xenon",
    "name_de": "Xenon",
    "group": 18,
    "period": 5,
    "series": "Noble gases",
    "tokens_de": [
      "▁X",
      "en",
      "on"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁X",
      "en",
      "on"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁X",
      "e"
    ],
    "token_count_symbol": 2,
    "description_de": "Xenon (Xe, Ordnungszahl 54) wird in 3 Token(s) zerlegt: ['▁X', 'en', 'on']."
  },
  {
    "atomic_number": 55,
    "symbol": "Cs",
    "name_en": "Cesium",
    "name_de": "Caesium",
    "group": 1,
    "period": 6,
    "series": "Alkali metals",
    "tokens_de": [
      "▁Ca",
      "es",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ces",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁C",
      "s"
    ],
    "token_count_symbol": 2,
    "description_de": "Caesium (Cs, Ordnungszahl 55) wird in 3 Token(s) zerlegt: ['▁Ca', 'es', 'ium']."
  },
  {
    "atomic_number": 56,
    "symbol": "Ba",
    "name_en": "Barium",
    "name_de": "Barium",
    "group": 2,
    "period": 6,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁B",
      "arium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁B",
      "arium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ba"
    ],
    "token_count_symbol": 1,
    "description_de": "Barium (Ba, Ordnungszahl 56) wird in 2 Token(s) zerlegt: ['▁B', 'arium']."
  },
  {
    "atomic_number": 57,
    "symbol": "La",
    "name_en": "Lanthanum",
    "name_de": "Lanthan",
    "group": 3,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁L",
      "anth",
      "an"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁L",
      "anth",
      "an",
      "um"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁La"
    ],
    "token_count_symbol": 1,
    "description_de": "Lanthan (La, Ordnungszahl 57) wird in 3 Token(s) zerlegt: ['▁L', 'anth', 'an']."
  },
  {
    "atomic_number": 58,
    "symbol": "Ce",
    "name_en": "Cerium",
    "name_de": "Cer",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Cer"
    ],
    "token_count_de": 1,
    "tokens_en": [
      "▁Cer",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ce"
    ],
    "token_count_symbol": 1,
    "description_de": "Cer (Ce, Ordnungszahl 58) wird in 1 Token(s) zerlegt: ['▁Cer']."
  },
  {
    "atomic_number": 59,
    "symbol": "Pr",
    "name_en": "Praseodymium",
    "name_de": "Praseodym",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Pr",
      "ase",
      "od",
      "ym"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Pr",
      "ase",
      "od",
      "ym",
      "ium"
    ],
    "token_count_en": 5,
    "tokens_symbol": [
      "▁Pr"
    ],
    "token_count_symbol": 1,
    "description_de": "Praseodym (Pr, Ordnungszahl 59) wird in 4 Token(s) zerlegt: ['▁Pr', 'ase', 'od', 'ym']."
  },
  {
    "atomic_number": 60,
    "symbol": "Nd",
    "name_en": "Neodymium",
    "name_de": "Neodym",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Ne",
      "od",
      "ym"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ne",
      "od",
      "ym",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁N",
      "d"
    ],
    "token_count_symbol": 2,
    "description_de": "Neodym (Nd, Ordnungszahl 60) wird in 3 Token(s) zerlegt: ['▁Ne', 'od', 'ym']."
  },
  {
    "atomic_number": 61,
    "symbol": "Pm",
    "name_en": "Promethium",
    "name_de": "Promethium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Prom",
      "eth",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Prom",
      "eth",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁P",
      "m"
    ],
    "token_count_symbol": 2,
    "description_de": "Promethium (Pm, Ordnungszahl 61) wird in 3 Token(s) zerlegt: ['▁Prom', 'eth', 'ium']."
  },
  {
    "atomic_number": 62,
    "symbol": "Sm",
    "name_en": "Samarium",
    "name_de": "Samarium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Sam",
      "arium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Sam",
      "arium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Sm"
    ],
    "token_count_symbol": 1,
    "description_de": "Samarium (Sm, Ordnungszahl 62) wird in 2 Token(s) zerlegt: ['▁Sam', 'arium']."
  },
  {
    "atomic_number": 63,
    "symbol": "Eu",
    "name_en": "Europium",
    "name_de": "Europium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Europ",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Europ",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Eu"
    ],
    "token_count_symbol": 1,
    "description_de": "Europium (Eu, Ordnungszahl 63) wird in 2 Token(s) zerlegt: ['▁Europ', 'ium']."
  },
  {
    "atomic_number": 64,
    "symbol": "Gd",
    "name_en": "Gadolinium",
    "name_de": "Gadolinium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁G",
      "ad",
      "olin",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁G",
      "ad",
      "olin",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁G",
      "d"
    ],
    "token_count_symbol": 2,
    "description_de": "Gadolinium (Gd, Ordnungszahl 64) wird in 4 Token(s) zerlegt: ['▁G', 'ad', 'olin', 'ium']."
  },
  {
    "atomic_number": 65,
    "symbol": "Tb",
    "name_en": "Terbium",
    "name_de": "Terbium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Ter",
      "b",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ter",
      "b",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁T",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Terbium (Tb, Ordnungszahl 65) wird in 3 Token(s) zerlegt: ['▁Ter', 'b', 'ium']."
  },
  {
    "atomic_number": 66,
    "symbol": "Dy",
    "name_en": "Dysprosium",
    "name_de": "Dysprosium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁D",
      "ys",
      "pro",
      "s",
      "ium"
    ],
    "token_count_de": 5,
    "tokens_en": [
      "▁D",
      "ys",
      "pro",
      "s",
      "ium"
    ],
    "token_count_en": 5,
    "tokens_symbol": [
      "▁Dy"
    ],
    "token_count_symbol": 1,
    "description_de": "Dysprosium (Dy, Ordnungszahl 66) wird in 5 Token(s) zerlegt: ['▁D', 'ys', 'pro', 's', 'ium']."
  },
  {
    "atomic_number": 67,
    "symbol": "Ho",
    "name_en": "Holmium",
    "name_de": "Holmium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Hol",
      "m",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Hol",
      "m",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ho"
    ],
    "token_count_symbol": 1,
    "description_de": "Holmium (Ho, Ordnungszahl 67) wird in 3 Token(s) zerlegt: ['▁Hol', 'm', 'ium']."
  },
  {
    "atomic_number": 68,
    "symbol": "Er",
    "name_en": "Erbium",
    "name_de": "Erbium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Er",
      "b",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Er",
      "b",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Er"
    ],
    "token_count_symbol": 1,
    "description_de": "Erbium (Er, Ordnungszahl 68) wird in 3 Token(s) zerlegt: ['▁Er', 'b', 'ium']."
  },
  {
    "atomic_number": 69,
    "symbol": "Tm",
    "name_en": "Thulium",
    "name_de": "Thulium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Th",
      "ul",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Th",
      "ul",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁T",
      "m"
    ],
    "token_count_symbol": 2,
    "description_de": "Thulium (Tm, Ordnungszahl 69) wird in 3 Token(s) zerlegt: ['▁Th', 'ul', 'ium']."
  },
  {
    "atomic_number": 70,
    "symbol": "Yb",
    "name_en": "Ytterbium",
    "name_de": "Ytterbium",
    "group": null,
    "period": 6,
    "series": "Lanthanides",
    "tokens_de": [
      "▁Y",
      "t",
      "ter",
      "b",
      "ium"
    ],
    "token_count_de": 5,
    "tokens_en": [
      "▁Y",
      "t",
      "ter",
      "b",
      "ium"
    ],
    "token_count_en": 5,
    "tokens_symbol": [
      "▁Y",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Ytterbium (Yb, Ordnungszahl 70) wird in 5 Token(s) zerlegt: ['▁Y', 't', 'ter', 'b', 'ium']."
  },
  {
    "atomic_number": 71,
    "symbol": "Lu",
    "name_en": "Lutetium",
    "name_de": "Lutetium",
    "group": null,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁L",
      "ut",
      "et",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁L",
      "ut",
      "et",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Lu"
    ],
    "token_count_symbol": 1,
    "description_de": "Lutetium (Lu, Ordnungszahl 71) wird in 4 Token(s) zerlegt: ['▁L', 'ut', 'et', 'ium']."
  },
  {
    "atomic_number": 72,
    "symbol": "Hf",
    "name_en": "Hafnium",
    "name_de": "Hafnium",
    "group": 4,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁H",
      "af",
      "n",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁H",
      "af",
      "n",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁H",
      "f"
    ],
    "token_count_symbol": 2,
    "description_de": "Hafnium (Hf, Ordnungszahl 72) wird in 4 Token(s) zerlegt: ['▁H', 'af', 'n', 'ium']."
  },
  {
    "atomic_number": 73,
    "symbol": "Ta",
    "name_en": "Tantalum",
    "name_de": "Tantal",
    "group": 5,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁T",
      "antal"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁T",
      "antal",
      "um"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ta"
    ],
    "token_count_symbol": 1,
    "description_de": "Tantal (Ta, Ordnungszahl 73) wird in 2 Token(s) zerlegt: ['▁T', 'antal']."
  },
  {
    "atomic_number": 74,
    "symbol": "W",
    "name_en": "Tungsten",
    "name_de": "Wolfram",
    "group": 6,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁Wol",
      "fr",
      "am"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁T",
      "ung",
      "sten"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁W"
    ],
    "token_count_symbol": 1,
    "description_de": "Wolfram (W, Ordnungszahl 74) wird in 3 Token(s) zerlegt: ['▁Wol', 'fr', 'am']."
  },
  {
    "atomic_number": 75,
    "symbol": "Re",
    "name_en": "Rhenium",
    "name_de": "Rhenium",
    "group": 7,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁R",
      "hen",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁R",
      "hen",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Re"
    ],
    "token_count_symbol": 1,
    "description_de": "Rhenium (Re, Ordnungszahl 75) wird in 3 Token(s) zerlegt: ['▁R', 'hen', 'ium']."
  },
  {
    "atomic_number": 76,
    "symbol": "Os",
    "name_en": "Osmium",
    "name_de": "Osmium",
    "group": 8,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁O",
      "sm",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁O",
      "sm",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Os"
    ],
    "token_count_symbol": 1,
    "description_de": "Osmium (Os, Ordnungszahl 76) wird in 3 Token(s) zerlegt: ['▁O', 'sm', 'ium']."
  },
  {
    "atomic_number": 77,
    "symbol": "Ir",
    "name_en": "Iridium",
    "name_de": "Iridium",
    "group": 9,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁I",
      "rid",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁I",
      "rid",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ir"
    ],
    "token_count_symbol": 1,
    "description_de": "Iridium (Ir, Ordnungszahl 77) wird in 3 Token(s) zerlegt: ['▁I', 'rid', 'ium']."
  },
  {
    "atomic_number": 78,
    "symbol": "Pt",
    "name_en": "Platinum",
    "name_de": "Platin",
    "group": 10,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁Pl",
      "atin"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Pl",
      "atinum"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁P",
      "t"
    ],
    "token_count_symbol": 2,
    "description_de": "Platin (Pt, Ordnungszahl 78) wird in 2 Token(s) zerlegt: ['▁Pl', 'atin']."
  },
  {
    "atomic_number": 79,
    "symbol": "Au",
    "name_en": "Gold",
    "name_de": "Gold",
    "group": 11,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁Gold"
    ],
    "token_count_de": 1,
    "tokens_en": [
      "▁Gold"
    ],
    "token_count_en": 1,
    "tokens_symbol": [
      "▁Au"
    ],
    "token_count_symbol": 1,
    "description_de": "Gold (Au, Ordnungszahl 79) wird in 1 Token(s) zerlegt: ['▁Gold']."
  },
  {
    "atomic_number": 80,
    "symbol": "Hg",
    "name_en": "Mercury",
    "name_de": "Quecksilber",
    "group": 12,
    "period": 6,
    "series": "Transition metals",
    "tokens_de": [
      "▁Que",
      "cks",
      "il",
      "ber"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Mer",
      "cury"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁H",
      "g"
    ],
    "token_count_symbol": 2,
    "description_de": "Quecksilber (Hg, Ordnungszahl 80) wird in 4 Token(s) zerlegt: ['▁Que', 'cks', 'il', 'ber']."
  },
  {
    "atomic_number": 81,
    "symbol": "Tl",
    "name_en": "Thallium",
    "name_de": "Thallium",
    "group": 13,
    "period": 6,
    "series": "Poor metals",
    "tokens_de": [
      "▁Th",
      "all",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Th",
      "all",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁T",
      "l"
    ],
    "token_count_symbol": 2,
    "description_de": "Thallium (Tl, Ordnungszahl 81) wird in 3 Token(s) zerlegt: ['▁Th', 'all', 'ium']."
  },
  {
    "atomic_number": 82,
    "symbol": "Pb",
    "name_en": "Lead",
    "name_de": "Blei",
    "group": 14,
    "period": 6,
    "series": "Poor metals",
    "tokens_de": [
      "▁B",
      "le",
      "i"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Lead"
    ],
    "token_count_en": 1,
    "tokens_symbol": [
      "▁P",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Blei (Pb, Ordnungszahl 82) wird in 3 Token(s) zerlegt: ['▁B', 'le', 'i']."
  },
  {
    "atomic_number": 83,
    "symbol": "Bi",
    "name_en": "Bismuth",
    "name_de": "Bismut",
    "group": 15,
    "period": 6,
    "series": "Poor metals",
    "tokens_de": [
      "▁B",
      "ism",
      "ut"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁B",
      "ism",
      "uth"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Bi"
    ],
    "token_count_symbol": 1,
    "description_de": "Bismut (Bi, Ordnungszahl 83) wird in 3 Token(s) zerlegt: ['▁B', 'ism', 'ut']."
  },
  {
    "atomic_number": 84,
    "symbol": "Po",
    "name_en": "Polonium",
    "name_de": "Polonium",
    "group": 16,
    "period": 6,
    "series": "Metalloids",
    "tokens_de": [
      "▁Pol",
      "on",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Pol",
      "on",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Po"
    ],
    "token_count_symbol": 1,
    "description_de": "Polonium (Po, Ordnungszahl 84) wird in 3 Token(s) zerlegt: ['▁Pol', 'on', 'ium']."
  },
  {
    "atomic_number": 85,
    "symbol": "At",
    "name_en": "Astatine",
    "name_de": "Astat",
    "group": 17,
    "period": 6,
    "series": "Halogens",
    "tokens_de": [
      "▁A",
      "stat"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁A",
      "stat",
      "ine"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁At"
    ],
    "token_count_symbol": 1,
    "description_de": "Astat (At, Ordnungszahl 85) wird in 2 Token(s) zerlegt: ['▁A', 'stat']."
  },
  {
    "atomic_number": 86,
    "symbol": "Rn",
    "name_en": "Radon",
    "name_de": "Radon",
    "group": 18,
    "period": 6,
    "series": "Noble gases",
    "tokens_de": [
      "▁Rad",
      "on"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Rad",
      "on"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁R",
      "n"
    ],
    "token_count_symbol": 2,
    "description_de": "Radon (Rn, Ordnungszahl 86) wird in 2 Token(s) zerlegt: ['▁Rad', 'on']."
  },
  {
    "atomic_number": 87,
    "symbol": "Fr",
    "name_en": "Francium",
    "name_de": "Francium",
    "group": 1,
    "period": 7,
    "series": "Alkali metals",
    "tokens_de": [
      "▁Franc",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Franc",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Fr"
    ],
    "token_count_symbol": 1,
    "description_de": "Francium (Fr, Ordnungszahl 87) wird in 2 Token(s) zerlegt: ['▁Franc', 'ium']."
  },
  {
    "atomic_number": 88,
    "symbol": "Ra",
    "name_en": "Radium",
    "name_de": "Radium",
    "group": 2,
    "period": 7,
    "series": "Alkaline earth metals",
    "tokens_de": [
      "▁Rad",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Rad",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Ra"
    ],
    "token_count_symbol": 1,
    "description_de": "Radium (Ra, Ordnungszahl 88) wird in 2 Token(s) zerlegt: ['▁Rad', 'ium']."
  },
  {
    "atomic_number": 89,
    "symbol": "Ac",
    "name_en": "Actinium",
    "name_de": "Actinium",
    "group": 3,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Act",
      "in",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Act",
      "in",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ac"
    ],
    "token_count_symbol": 1,
    "description_de": "Actinium (Ac, Ordnungszahl 89) wird in 3 Token(s) zerlegt: ['▁Act', 'in', 'ium']."
  },
  {
    "atomic_number": 90,
    "symbol": "Th",
    "name_en": "Thorium",
    "name_de": "Thorium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Thor",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Thor",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Th"
    ],
    "token_count_symbol": 1,
    "description_de": "Thorium (Th, Ordnungszahl 90) wird in 2 Token(s) zerlegt: ['▁Thor', 'ium']."
  },
  {
    "atomic_number": 91,
    "symbol": "Pa",
    "name_en": "Protactinium",
    "name_de": "Protactinium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Pro",
      "t",
      "act",
      "in",
      "ium"
    ],
    "token_count_de": 5,
    "tokens_en": [
      "▁Pro",
      "t",
      "act",
      "in",
      "ium"
    ],
    "token_count_en": 5,
    "tokens_symbol": [
      "▁Pa"
    ],
    "token_count_symbol": 1,
    "description_de": "Protactinium (Pa, Ordnungszahl 91) wird in 5 Token(s) zerlegt: ['▁Pro', 't', 'act', 'in', 'ium']."
  },
  {
    "atomic_number": 92,
    "symbol": "U",
    "name_en": "Uranium",
    "name_de": "Uran",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁U",
      "ran"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁U",
      "ran",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁U"
    ],
    "token_count_symbol": 1,
    "description_de": "Uran (U, Ordnungszahl 92) wird in 2 Token(s) zerlegt: ['▁U', 'ran']."
  },
  {
    "atomic_number": 93,
    "symbol": "Np",
    "name_en": "Neptunium",
    "name_de": "Neptunium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Ne",
      "pt",
      "un",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Ne",
      "pt",
      "un",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁N",
      "p"
    ],
    "token_count_symbol": 2,
    "description_de": "Neptunium (Np, Ordnungszahl 93) wird in 4 Token(s) zerlegt: ['▁Ne', 'pt', 'un', 'ium']."
  },
  {
    "atomic_number": 94,
    "symbol": "Pu",
    "name_en": "Plutonium",
    "name_de": "Plutonium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Pl",
      "ut",
      "on",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Pl",
      "ut",
      "on",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Pu"
    ],
    "token_count_symbol": 1,
    "description_de": "Plutonium (Pu, Ordnungszahl 94) wird in 4 Token(s) zerlegt: ['▁Pl', 'ut', 'on', 'ium']."
  },
  {
    "atomic_number": 95,
    "symbol": "Am",
    "name_en": "Americium",
    "name_de": "Americium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Amer",
      "ic",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Amer",
      "ic",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Am"
    ],
    "token_count_symbol": 1,
    "description_de": "Americium (Am, Ordnungszahl 95) wird in 3 Token(s) zerlegt: ['▁Amer', 'ic', 'ium']."
  },
  {
    "atomic_number": 96,
    "symbol": "Cm",
    "name_en": "Curium",
    "name_de": "Curium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Cur",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Cur",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁C",
      "m"
    ],
    "token_count_symbol": 2,
    "description_de": "Curium (Cm, Ordnungszahl 96) wird in 2 Token(s) zerlegt: ['▁Cur', 'ium']."
  },
  {
    "atomic_number": 97,
    "symbol": "Bk",
    "name_en": "Berkelium",
    "name_de": "Berkelium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Ber",
      "kel",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Ber",
      "kel",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁B",
      "k"
    ],
    "token_count_symbol": 2,
    "description_de": "Berkelium (Bk, Ordnungszahl 97) wird in 3 Token(s) zerlegt: ['▁Ber', 'kel', 'ium']."
  },
  {
    "atomic_number": 98,
    "symbol": "Cf",
    "name_en": "Californium",
    "name_de": "Californium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Cal",
      "iforn",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Cal",
      "iforn",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁C",
      "f"
    ],
    "token_count_symbol": 2,
    "description_de": "Californium (Cf, Ordnungszahl 98) wird in 3 Token(s) zerlegt: ['▁Cal', 'iforn', 'ium']."
  },
  {
    "atomic_number": 99,
    "symbol": "Es",
    "name_en": "Einsteinium",
    "name_de": "Einsteinium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Einstein",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Einstein",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Es"
    ],
    "token_count_symbol": 1,
    "description_de": "Einsteinium (Es, Ordnungszahl 99) wird in 2 Token(s) zerlegt: ['▁Einstein', 'ium']."
  },
  {
    "atomic_number": 100,
    "symbol": "Fm",
    "name_en": "Fermium",
    "name_de": "Fermium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁F",
      "erm",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁F",
      "erm",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁F",
      "m"
    ],
    "token_count_symbol": 2,
    "description_de": "Fermium (Fm, Ordnungszahl 100) wird in 3 Token(s) zerlegt: ['▁F', 'erm', 'ium']."
  },
  {
    "atomic_number": 101,
    "symbol": "Md",
    "name_en": "Mendelevium",
    "name_de": "Mendelevium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Mend",
      "ele",
      "v",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Mend",
      "ele",
      "v",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁M",
      "d"
    ],
    "token_count_symbol": 2,
    "description_de": "Mendelevium (Md, Ordnungszahl 101) wird in 4 Token(s) zerlegt: ['▁Mend', 'ele', 'v', 'ium']."
  },
  {
    "atomic_number": 102,
    "symbol": "No",
    "name_en": "Nobelium",
    "name_de": "Nobelium",
    "group": null,
    "period": 7,
    "series": "Actinides",
    "tokens_de": [
      "▁Nob",
      "el",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Nob",
      "el",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁No"
    ],
    "token_count_symbol": 1,
    "description_de": "Nobelium (No, Ordnungszahl 102) wird in 3 Token(s) zerlegt: ['▁Nob', 'el', 'ium']."
  },
  {
    "atomic_number": 103,
    "symbol": "Lr",
    "name_en": "Lawrencium",
    "name_de": "Lawrencium",
    "group": null,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Law",
      "ren",
      "ci",
      "um"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Law",
      "ren",
      "ci",
      "um"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁L",
      "r"
    ],
    "token_count_symbol": 2,
    "description_de": "Lawrencium (Lr, Ordnungszahl 103) wird in 4 Token(s) zerlegt: ['▁Law', 'ren', 'ci', 'um']."
  },
  {
    "atomic_number": 104,
    "symbol": "Rf",
    "name_en": "Rutherfordium",
    "name_de": "Rutherfordium",
    "group": 4,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁R",
      "uther",
      "ford",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁R",
      "uther",
      "ford",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁R",
      "f"
    ],
    "token_count_symbol": 2,
    "description_de": "Rutherfordium (Rf, Ordnungszahl 104) wird in 4 Token(s) zerlegt: ['▁R', 'uther', 'ford', 'ium']."
  },
  {
    "atomic_number": 105,
    "symbol": "Db",
    "name_en": "Dubnium",
    "name_de": "Dubnium",
    "group": 5,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Dub",
      "n",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Dub",
      "n",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁D",
      "b"
    ],
    "token_count_symbol": 2,
    "description_de": "Dubnium (Db, Ordnungszahl 105) wird in 3 Token(s) zerlegt: ['▁Dub', 'n', 'ium']."
  },
  {
    "atomic_number": 106,
    "symbol": "Sg",
    "name_en": "Seaborgium",
    "name_de": "Seaborgium",
    "group": 6,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Se",
      "ab",
      "org",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Se",
      "ab",
      "org",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁S",
      "g"
    ],
    "token_count_symbol": 2,
    "description_de": "Seaborgium (Sg, Ordnungszahl 106) wird in 4 Token(s) zerlegt: ['▁Se', 'ab', 'org', 'ium']."
  },
  {
    "atomic_number": 107,
    "symbol": "Bh",
    "name_en": "Bohrium",
    "name_de": "Bohrium",
    "group": 7,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Boh",
      "rium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Boh",
      "rium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁Bh"
    ],
    "token_count_symbol": 1,
    "description_de": "Bohrium (Bh, Ordnungszahl 107) wird in 2 Token(s) zerlegt: ['▁Boh', 'rium']."
  },
  {
    "atomic_number": 108,
    "symbol": "Hs",
    "name_en": "Hassium",
    "name_de": "Hassium",
    "group": 8,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Hass",
      "ium"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Hass",
      "ium"
    ],
    "token_count_en": 2,
    "tokens_symbol": [
      "▁H",
      "s"
    ],
    "token_count_symbol": 2,
    "description_de": "Hassium (Hs, Ordnungszahl 108) wird in 2 Token(s) zerlegt: ['▁Hass', 'ium']."
  },
  {
    "atomic_number": 109,
    "symbol": "Mt",
    "name_en": "Meitnerium",
    "name_de": "Meitnerium",
    "group": 9,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Me",
      "it",
      "ner",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Me",
      "it",
      "ner",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁M",
      "t"
    ],
    "token_count_symbol": 2,
    "description_de": "Meitnerium (Mt, Ordnungszahl 109) wird in 4 Token(s) zerlegt: ['▁Me', 'it', 'ner', 'ium']."
  },
  {
    "atomic_number": 110,
    "symbol": "Ds",
    "name_en": "Darmstadtium",
    "name_de": "Darmstadtium",
    "group": 10,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁D",
      "arm",
      "stadt",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁D",
      "arm",
      "stadt",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁D",
      "s"
    ],
    "token_count_symbol": 2,
    "description_de": "Darmstadtium (Ds, Ordnungszahl 110) wird in 4 Token(s) zerlegt: ['▁D', 'arm', 'stadt', 'ium']."
  },
  {
    "atomic_number": 111,
    "symbol": "Rg",
    "name_en": "Roentgenium",
    "name_de": "Röntgenium",
    "group": 11,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁R",
      "ö",
      "nt",
      "gen",
      "ium"
    ],
    "token_count_de": 5,
    "tokens_en": [
      "▁Ro",
      "ent",
      "gen",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁R",
      "g"
    ],
    "token_count_symbol": 2,
    "description_de": "Röntgenium (Rg, Ordnungszahl 111) wird in 5 Token(s) zerlegt: ['▁R', 'ö', 'nt', 'gen', 'ium']."
  },
  {
    "atomic_number": 112,
    "symbol": "Cn",
    "name_en": "Copernicium",
    "name_de": "Copernicium",
    "group": 12,
    "period": 7,
    "series": "Transition metals",
    "tokens_de": [
      "▁Cop",
      "ern",
      "ic",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁Cop",
      "ern",
      "ic",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁C",
      "n"
    ],
    "token_count_symbol": 2,
    "description_de": "Copernicium (Cn, Ordnungszahl 112) wird in 4 Token(s) zerlegt: ['▁Cop', 'ern', 'ic', 'ium']."
  },
  {
    "atomic_number": 113,
    "symbol": "Nh",
    "name_en": "Nihonium",
    "name_de": "Nihonium",
    "group": 13,
    "period": 7,
    "series": "Poor metals",
    "tokens_de": [
      "▁N",
      "ih",
      "on",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁N",
      "ih",
      "on",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁N",
      "h"
    ],
    "token_count_symbol": 2,
    "description_de": "Nihonium (Nh, Ordnungszahl 113) wird in 4 Token(s) zerlegt: ['▁N', 'ih', 'on', 'ium']."
  },
  {
    "atomic_number": 114,
    "symbol": "Fl",
    "name_en": "Flerovium",
    "name_de": "Flerovium",
    "group": 14,
    "period": 7,
    "series": "Poor metals",
    "tokens_de": [
      "▁F",
      "ler",
      "ov",
      "ium"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁F",
      "ler",
      "ov",
      "ium"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Fl"
    ],
    "token_count_symbol": 1,
    "description_de": "Flerovium (Fl, Ordnungszahl 114) wird in 4 Token(s) zerlegt: ['▁F', 'ler', 'ov', 'ium']."
  },
  {
    "atomic_number": 115,
    "symbol": "Mc",
    "name_en": "Moscovium",
    "name_de": "Moscovium",
    "group": 15,
    "period": 7,
    "series": "Poor metals",
    "tokens_de": [
      "▁Mos",
      "cov",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Mos",
      "cov",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Mc"
    ],
    "token_count_symbol": 1,
    "description_de": "Moscovium (Mc, Ordnungszahl 115) wird in 3 Token(s) zerlegt: ['▁Mos', 'cov', 'ium']."
  },
  {
    "atomic_number": 116,
    "symbol": "Lv",
    "name_en": "Livermorium",
    "name_de": "Livermorium",
    "group": 16,
    "period": 7,
    "series": "Poor metals",
    "tokens_de": [
      "▁Liver",
      "mor",
      "ium"
    ],
    "token_count_de": 3,
    "tokens_en": [
      "▁Liver",
      "mor",
      "ium"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁L",
      "v"
    ],
    "token_count_symbol": 2,
    "description_de": "Livermorium (Lv, Ordnungszahl 116) wird in 3 Token(s) zerlegt: ['▁Liver', 'mor', 'ium']."
  },
  {
    "atomic_number": 117,
    "symbol": "Ts",
    "name_en": "Tennessine",
    "name_de": "Tenness",
    "group": 17,
    "period": 7,
    "series": "Halogens",
    "tokens_de": [
      "▁Ten",
      "ness"
    ],
    "token_count_de": 2,
    "tokens_en": [
      "▁Ten",
      "ness",
      "ine"
    ],
    "token_count_en": 3,
    "tokens_symbol": [
      "▁Ts"
    ],
    "token_count_symbol": 1,
    "description_de": "Tenness (Ts, Ordnungszahl 117) wird in 2 Token(s) zerlegt: ['▁Ten', 'ness']."
  },
  {
    "atomic_number": 118,
    "symbol": "Og",
    "name_en": "Oganesson",
    "name_de": "Oganesson",
    "group": 18,
    "period": 7,
    "series": "Noble gases",
    "tokens_de": [
      "▁O",
      "gan",
      "ess",
      "on"
    ],
    "token_count_de": 4,
    "tokens_en": [
      "▁O",
      "gan",
      "ess",
      "on"
    ],
    "token_count_en": 4,
    "tokens_symbol": [
      "▁Og"
    ],
    "token_count_symbol": 1,
    "description_de": "Oganesson (Og, Ordnungszahl 118) wird in 4 Token(s) zerlegt: ['▁O', 'gan', 'ess', 'on']."
  }
];
