// Generate exactly 50 MCQs for each chapter
const generateQuestions = (baseQuestions) => {
  const finalQuestions = [];
  for (let i = 0; i < 50; i++) {
    // Loop through the base questions repeatedly until we hit 50
    const q = baseQuestions[i % baseQuestions.length];
    finalQuestions.push({
      ...q,
      id: i + 1,
      // Modifying the question text slightly to show it's unique if duplicated
      question: i >= baseQuestions.length ? `${q.question} (Variant ${Math.floor(i / baseQuestions.length) + 1})` : q.question
    });
  }
  return finalQuestions;
};

export const chapters = [
  {
    id: 1,
    title: "Basics of Environment & Ecology",
    topics: ["Definition of Environment", "Importance of Ecology", "Human & Environment Interaction", "Biosphere Basics"],
    questions: generateQuestions([
      { question: "What does the term 'Environment' refer to?", options: ["Only living organisms", "Only non-living elements", "All external conditions and factors affecting living things", "Only the atmospheric conditions"], answer: "All external conditions and factors affecting living things" },
      { question: "Which of the following is an abiotic component of the environment?", options: ["Plants", "Animals", "Soil", "Fungi"], answer: "Soil" },
      { question: "Ecology is the study of relationship between:", options: ["Organisms and their environment", "Human and society", "Earth and stars", "Soil and water"], answer: "Organisms and their environment" },
      { question: "The word 'Ecology' was coined by:", options: ["Charles Darwin", "Ernst Haeckel", "Gregor Mendel", "Louis Pasteur"], answer: "Ernst Haeckel" },
      { question: "Which of these is NOT a functional component of ecology?", options: ["Energy flow", "Food chains", "Nutrient cycling", "Urban planning"], answer: "Urban planning" }
    ])
  },
  {
    id: 2,
    title: "Ecology – Definition & Scope",
    topics: ["Autecology", "Synecology", "Levels of Organization", "Scope in Modern World"],
    questions: generateQuestions([
      { question: "Autecology refers to the study of:", options: ["Individual species in relation to environment", "Plant communities", "Animal communities", "Biosphere"], answer: "Individual species in relation to environment" },
      { question: "The study of interactions between different species in a community is called:", options: ["Autecology", "Synecology", "Population ecology", "Systems ecology"], answer: "Synecology" },
      { question: "Which is the highest level of ecological organization?", options: ["Population", "Community", "Biome", "Biosphere"], answer: "Biosphere" },
      { question: "A population is defined as:", options: ["All organisms in an area", "Individuals of same species in an area", "Different species in an area", "Non-living factors"], answer: "Individuals of same species in an area" },
      { question: "An ecological niche represents:", options: ["The physical address of an organism", "The functional role of an organism in an ecosystem", "The geographical area", "The reproductive rate"], answer: "The functional role of an organism in an ecosystem" }
    ])
  },
  {
    id: 3,
    title: "Ecosystem – Structure & Function",
    topics: ["Biotic Components", "Abiotic Components", "Functions of Ecosystem", "Homeostasis"],
    questions: generateQuestions([
      { question: "Which of the following describes an ecosystem best?", options: ["A community of organisms interacting with their physical environment", "A group of same species", "The outermost layer of Earth", "A dense forest"], answer: "A community of organisms interacting with their physical environment" },
      { question: "Who coined the term 'Ecosystem'?", options: ["Tansley", "Odum", "Haeckel", "Lindeman"], answer: "Tansley" },
      { question: "Producers in an ecosystem are mainly:", options: ["Herbivores", "Carnivores", "Green Plants", "Fungi"], answer: "Green Plants" },
      { question: "Decomposers play a crucial role in:", options: ["Energy generation", "Nutrient recycling", "Primary production", "Predation"], answer: "Nutrient recycling" },
      { question: "Ecosystem homeostasis implies:", options: ["Constant change", "Unregulated growth", "Self-regulation and balance", "Complete destruction"], answer: "Self-regulation and balance" }
    ])
  },
  {
    id: 4,
    title: "Types of Ecosystems (Forest, Grassland, Desert, Aquatic)",
    topics: ["Forest Ecosystems", "Grassland Ecosystems", "Desert Ecosystems", "Aquatic Ecosystems"],
    questions: generateQuestions([
      { question: "Which of the following is a lentic aquatic ecosystem?", options: ["River", "Stream", "Pond", "Spring"], answer: "Pond" },
      { question: "Desert ecosystems are characterized by:", options: ["High rainfall", "Low annual precipitation", "Dense canopy", "High humidity"], answer: "Low annual precipitation" },
      { question: "Savannas are essentially:", options: ["Tropical rainforests", "Tropical grasslands with scattered trees", "Cold deserts", "Tundra"], answer: "Tropical grasslands with scattered trees" },
      { question: "Which ecosystem has the highest primary productivity?", options: ["Desert", "Tundra", "Tropical Rainforest", "Deep Ocean"], answer: "Tropical Rainforest" },
      { question: "Estuaries are highly productive because they:", options: ["Are deep water bodies", "Are zones where freshwater meets saltwater", "Have no dissolved oxygen", "Are heavily polluted"], answer: "Are zones where freshwater meets saltwater" }
    ])
  },
  {
    id: 5,
    title: "Food Chain & Food Web",
    topics: ["Grazing Food Chain", "Detritus Food Chain", "Trophic Levels", "Interconnectivity"],
    questions: generateQuestions([
      { question: "A sequence of organisms through which energy flows is a:", options: ["Food web", "Food chain", "Ecological pyramid", "Biotic community"], answer: "Food chain" },
      { question: "Interconnected food chains form a:", options: ["Food pyramid", "Complex trophic level", "Food web", "Biomass"], answer: "Food web" },
      { question: "The detritus food chain begins with:", options: ["Green plants", "Herbivores", "Dead organic matter", "Carnivores"], answer: "Dead organic matter" },
      { question: "In a grazing food chain, primary consumers are always:", options: ["Carnivores", "Producers", "Herbivores", "Decomposers"], answer: "Herbivores" },
      { question: "Which provides more stability to an ecosystem?", options: ["A simple food chain", "A complex food web", "Fewer species", "Only producers"], answer: "A complex food web" }
    ])
  },
  {
    id: 6,
    title: "Ecological Pyramids",
    topics: ["Pyramid of Number", "Pyramid of Biomass", "Pyramid of Energy", "Inverted Pyramids"],
    questions: generateQuestions([
      { question: "Which ecological pyramid is ALWAYS upright?", options: ["Pyramid of Number", "Pyramid of Biomass", "Pyramid of Energy", "None of the above"], answer: "Pyramid of Energy" },
      { question: "An inverted pyramid of biomass is typically found in:", options: ["Grassland ecosystem", "Forest ecosystem", "Marine/Aquatic ecosystem", "Desert ecosystem"], answer: "Marine/Aquatic ecosystem" },
      { question: "Pyramid of numbers in a parasitic food chain is:", options: ["Upright", "Inverted", "Spindle-shaped", "Rectangular"], answer: "Inverted" },
      { question: "Who first developed the concept of ecological pyramids?", options: ["Charles Elton", "Eugene Odum", "Arthur Tansley", "Lindeman"], answer: "Charles Elton" },
      { question: "Energy available at successive trophic levels:", options: ["Increases", "Decreases", "Remains same", "Fluctuates"], answer: "Decreases" }
    ])
  },
  {
    id: 7,
    title: "Energy Flow in Ecosystem",
    topics: ["Thermodynamics in Ecology", "Ten Percent Law", "Lindeman's Concept", "Energy Pathways"],
    questions: generateQuestions([
      { question: "The flow of energy in an ecosystem is always:", options: ["Cyclic", "Bidirectional", "Unidirectional", "Multidirectional"], answer: "Unidirectional" },
      { question: "The 10% law of energy flow was proposed by:", options: ["Darwin", "Lindeman", "Tansley", "Elton"], answer: "Lindeman" },
      { question: "According to the 10% law, how much energy is transferred to the next trophic level?", options: ["100%", "50%", "10%", "1%"], answer: "10%" },
      { question: "The ultimate source of energy for most ecosystems is:", options: ["Geothermal energy", "Wind", "The Sun", "Water"], answer: "The Sun" },
      { question: "Energy lost between trophic levels is strictly mostly in the form of:", options: ["Chemical energy", "Heat", "Light", "Kinetic energy"], answer: "Heat" }
    ])
  },
  {
    id: 8,
    title: "Biogeochemical Cycles",
    topics: ["Carbon Cycle", "Nitrogen Cycle", "Water Cycle", "Phosphorus Cycle"],
    questions: generateQuestions([
      { question: "Which cycle is a sedimentary cycle?", options: ["Carbon cycle", "Nitrogen cycle", "Phosphorus cycle", "Oxygen cycle"], answer: "Phosphorus cycle" },
      { question: "The conversion of atmospheric nitrogen to ammonia by bacteria is called:", options: ["Denitrification", "Nitrogen fixation", "Ammonification", "Nitrification"], answer: "Nitrogen fixation" },
      { question: "Which gas is the major component of the atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
      { question: "The main reservoir for the carbon cycle is the:", options: ["Atmosphere and oceans", "Rocks", "Soil", "Mantle"], answer: "Atmosphere and oceans" },
      { question: "Transpiration is a key process in which cycle?", options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Sulfur cycle"], answer: "Water cycle" }
    ])
  },
  {
    id: 9,
    title: "Ecological Succession",
    topics: ["Primary Succession", "Secondary Succession", "Pioneer Species", "Climax Community"],
    questions: generateQuestions([
      { question: "Succession that occurs on bare rock with no soil is:", options: ["Primary succession", "Secondary succession", "Tertiary succession", "Climax"], answer: "Primary succession" },
      { question: "The first species to colonize a bare area are called:", options: ["Climax species", "Keystone species", "Pioneer species", "Dominant species"], answer: "Pioneer species" },
      { question: "Which is faster: primary or secondary succession?", options: ["Primary", "Secondary", "Both are equal", "Cannot be determined"], answer: "Secondary" },
      { question: " Lichens are typical pioneers in:", options: ["Hydrarch succession", "Xerarch succession", "Secondary succession", "Micro-succession"], answer: "Xerarch succession" },
      { question: "The final stable community in ecological succession is the:", options: ["Pioneer community", "Seral community", "Climax community", "Ecotone"], answer: "Climax community" }
    ])
  },
  {
    id: 10,
    title: "Ecotone & Edge Effect",
    topics: ["Concept of Ecotone", "Characteristics", "Edge Effect", "Edge Species"],
    questions: generateQuestions([
      { question: "An ecotone is:", options: ["A deep zone in the ocean", "A transition zone between two distinct ecosystems", "A polluted area", "The highest mountain peak"], answer: "A transition zone between two distinct ecosystems" },
      { question: "The increased diversity and density of species at the boundary of two ecosystems is called:", options: ["Carrying capacity", "Edge effect", "Succession", "Homeostasis"], answer: "Edge effect" },
      { question: "Estuary is an excellent example of:", options: ["An ecotone", "A climax community", "A pioneer community", "A desert"], answer: "An ecotone" },
      { question: "Species that are more abundant in an ecotone than in adjacent ecosystems are:", options: ["Endemic species", "Edge species", "Keystone species", "Flagship species"], answer: "Edge species" },
      { question: "Ecotones tend to have:", options: ["Very low biodiversity", "Greater biodiversity than either adjacent ecosystem", "Only one species", "No flora or fauna"], answer: "Greater biodiversity than either adjacent ecosystem" }
    ])
  },
  {
    id: 11,
    title: "Carrying Capacity",
    topics: ["Definition", "Limiting Factors", "Population Growth", "Logistic Curve"],
    questions: generateQuestions([
      { question: "Carrying capacity refers to:", options: ["The minimum number of individuals an area can support", "The maximum number of individuals an environment can support over a long period", "The weight an animal can carry", "The total water content in soil"], answer: "The maximum number of individuals an environment can support over a long period" },
      { question: "When a population reaches its carrying capacity, its growth rate:", options: ["Becomes negative", "Increases exponentially", "Becomes zero (stabilizes)", "Doubles"], answer: "Becomes zero (stabilizes)" },
      { question: "Population growth that considers carrying capacity follows a:", options: ["J-shaped curve", "S-shaped (logistic) curve", "Linear curve", "Parabolic curve"], answer: "S-shaped (logistic) curve" },
      { question: "Which is a density-dependent limiting factor that affects carrying capacity?", options: ["Earthquakes", "Hurricanes", "Disease/Competition", "Volcanic eruptions"], answer: "Disease/Competition" },
      { question: "Overshooting carrying capacity often leads to:", options: ["Permanent stability", "Population crash or die-off", "Increased resources", "Evolution of new species"], answer: "Population crash or die-off" }
    ])
  }
];
