var sound2 = new Howl({
    src: ['mp3/731612__seth_makes_sounds__almostsummer.wav'],
    volume: 0.5,
    loop: true,
    autoplay: false,
    onend: function() {
      console.log('Finished!');
    }
  });
  
  // Restart background music from the beginning when button1 is clicked
  document.getElementById('button1').addEventListener("click", function() {
    if (sound2.playing()) {
      sound2.stop(); 
    }
    sound2.play(); 
  });
  
  // Toggle play/pause for the background music
  document.getElementById('button2').addEventListener("click", function() {
    if (sound2.playing()) {
      sound2.pause(); 
    } else {
      sound2.play(); 
    }
  });
  