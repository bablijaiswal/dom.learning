document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
      "spicy Veg Tacos🌮 || Sauté onions, bell peppers, corn & crumbled paneer with chili & cumin powder. Fill warm tortillas, top with salsa & coriander. Squeeze lime & enjoy!",
      "Spicy Dry Wai-Wai🥢 || Mix dry wai-wai noodles with onions, tomato, chili, lemon juice, and masala. Toss well and serve!",
      "Veggie Nachos🧀 || Layer nachos with beans, cheese, veggies, and jalapeños. Bake until cheese melts and serve hot!",
      "Korean Japchae🍜 || Stir-fry glass noodles with veggies in sesame oil. Add soy sauce and serve hot!",
      "Dry Laksa🍲 || Boil noodles in laksa paste and coconut milk. Add tofu and veggies. Serve warm!",
      "Delicious Spaghetti🍝 || Cook spaghetti and toss with tomato sauce, garlic, olive oil, and herbs. Serve with a sprinkle of cheese!",
      "Steamed Momos🥟 || Fill dumpling wrappers with spiced veggie mix. Steam until soft, and serve with chutney!"
    ];
  
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card, index) => {
      const originalImg = card.querySelector('img');
      const originalTitle = card.querySelector('h3');
  
      // Clone to prevent moving elements directly (which may remove images)
      const clonedImg = originalImg.cloneNode(true);
      const clonedTitle = originalTitle.cloneNode(true);
  
      const front = document.createElement('div');
      front.className = 'card-front';
      front.appendChild(clonedImg);
      front.appendChild(clonedTitle);
  
      const back = document.createElement('div');
      back.className = 'card-back';
      back.innerText = recipes[index];
  
      const inner = document.createElement('div');
      inner.className = 'card-inner';
      inner.appendChild(front);
      inner.appendChild(back);
  
      // Clear card and append flip container
      card.innerHTML = '';
      card.appendChild(inner);
  
      // Add flipping behavior
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  });
  
  