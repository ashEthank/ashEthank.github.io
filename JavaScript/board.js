$(() => {

sessionStorage.removeItem('value')
sessionStorage.removeItem('categoryId')

let value = [200, 400, 600, 800, 1000];

let $firstCat = $('#first');
let $secondCat = $('#second');
let $thirdCat = $('#third');
let $fourthCat = $('#fourth');
let $fifthCat = $('#fifth');
let $sixthCat = $('#sixth');

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('one'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $firstCat.text(data[0].category.title);
});

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('two'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $secondCat.text(data[0].category.title);
});

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('three'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $thirdCat.text(data[0].category.title);
});

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('four'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $fourthCat.text(data[0].category.title);
});

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('five'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $fifthCat.text(data[0].category.title);
});

$.ajax({
    url: "https://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : sessionStorage.getItem('six'),
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $sixthCat.text(data[0].category.title);
});

// first row

$('#01').on('click', () => {
  console.log('Hello')
  console.log(200);
  console.log(sessionStorage.getItem('one'));
  sessionStorage.setItem('value', 200)
  sessionStorage.setItem('categoryId', sessionStorage.getItem('one'))
  $('#01').empty('h2')
  window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
  // window.location.replace('https://ashethank.github.io/html/answer.html')
  })

  $('#02').on('click', () => {
    console.log('Hello')
    console.log(200);
    console.log(sessionStorage.getItem('two'));
    sessionStorage.setItem('value', 200)
    sessionStorage.setItem('categoryId', sessionStorage.getItem('two'))
    $('#02').empty('h2')
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
    // window.location.replace('https://ashethank.github.io/html/answer.html')
    })

    $('#03').on('click', () => {
      console.log('Hello')
      console.log(200);
      console.log(sessionStorage.getItem('three'));
      sessionStorage.setItem('value', 200)
      sessionStorage.setItem('categoryId', sessionStorage.getItem('three'))
      $('#03').empty('h2')
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
      // window.location.replace('https://ashethank.github.io/html/answer.html')
      })

      $('#04').on('click', () => {
        console.log('Hello')
        console.log(200);
        console.log(sessionStorage.getItem('four'));
        sessionStorage.setItem('value', 200)
        sessionStorage.setItem('categoryId', sessionStorage.getItem('four'))
        $('#04').empty('h2')
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
        // window.location.replace('https://ashethank.github.io/html/answer.html')
        })

        $('#05').on('click', () => {
          console.log('Hello')
          console.log(200);
          console.log(sessionStorage.getItem('five'));
          sessionStorage.setItem('value', 200)
          sessionStorage.setItem('categoryId', sessionStorage.getItem('five'))
          $('#05').empty('h2')
          // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
          // window.location.replace('https://ashethank.github.io/html/answer.html')
          })

          $('#06').on('click', () => {
            console.log('Hello')
            console.log(200);
            console.log(sessionStorage.getItem('six'));
            sessionStorage.setItem('value', 200)
            sessionStorage.setItem('categoryId', sessionStorage.getItem('six'))
            $('#06').empty('h2')
            // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
            // window.location.replace('https://ashethank.github.io/html/answer.html')
            })

// second row

$('#11').on('click', () => {
  console.log('Hello')
  console.log(400);
  console.log(sessionStorage.getItem('one'));
  sessionStorage.setItem('value', 400)
  sessionStorage.setItem('categoryId', sessionStorage.getItem('one'))
  $('#11').empty('h2')
  // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
  // window.location.replace('https://ashethank.github.io/html/answer.html')
  })

  $('#12').on('click', () => {
    console.log('Hello')
    console.log(400);
    console.log(sessionStorage.getItem('two'));
    sessionStorage.setItem('value', 400)
    sessionStorage.setItem('categoryId', sessionStorage.getItem('two'))
    $('#12').empty('h2')
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
    // window.location.replace('https://ashethank.github.io/html/answer.html')
    })

    $('#13').on('click', () => {
      console.log('Hello')
      console.log(400);
      console.log(sessionStorage.getItem('three'));
      sessionStorage.setItem('value', 400)
      sessionStorage.setItem('categoryId', sessionStorage.getItem('three'))
      $('#13').empty('h2')
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
      // window.location.replace('https://ashethank.github.io/html/answer.html')
      })

      $('#14').on('click', () => {
        console.log('Hello')
        console.log(400);
        console.log(sessionStorage.getItem('four'));
        sessionStorage.setItem('value', 400)
        sessionStorage.setItem('categoryId', sessionStorage.getItem('four'))
        $('#14').empty('h2')
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
        // window.location.replace('https://ashethank.github.io/html/answer.html')
        })

        $('#15').on('click', () => {
          console.log('Hello')
          console.log(400);
          console.log(sessionStorage.getItem('five'));
          sessionStorage.setItem('value', 400)
          sessionStorage.setItem('categoryId', sessionStorage.getItem('five'))
          $('#15').empty('h2')
          // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
          // window.location.replace('https://ashethank.github.io/html/answer.html')
          })

          $('#16').on('click', () => {
            console.log('Hello')
            console.log(400);
            console.log(sessionStorage.getItem('six'));
            sessionStorage.setItem('value', 400)
            sessionStorage.setItem('categoryId', sessionStorage.getItem('six'))
            $('#16').empty('h2')
            // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
            // window.location.replace('https://ashethank.github.io/html/answer.html')
            })

// third row

$('#21').on('click', () => {
  console.log('Hello')
  console.log(600);
  console.log(sessionStorage.getItem('one'));
  sessionStorage.setItem('value', 600)
  sessionStorage.setItem('categoryId', sessionStorage.getItem('one'))
  $('#21').empty('h2')
  // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
  // window.location.replace('https://ashethank.github.io/html/answer.html')
  })

  $('#22').on('click', () => {
    console.log('Hello')
    console.log(600);
    console.log(sessionStorage.getItem('two'));
    sessionStorage.setItem('value', 600)
    sessionStorage.setItem('categoryId', sessionStorage.getItem('two'))
    $('#22').empty('h2')
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
    // window.location.replace('https://ashethank.github.io/html/answer.html')
    })

    $('#23').on('click', () => {
      console.log('Hello')
      console.log(600);
      console.log(sessionStorage.getItem('three'));
      sessionStorage.setItem('value', 600)
      sessionStorage.setItem('categoryId', sessionStorage.getItem('three'))
      $('#23').empty('h2')
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
      // window.location.replace('https://ashethank.github.io/html/answer.html')
      })

      $('#24').on('click', () => {
        console.log('Hello')
        console.log(600);
        console.log(sessionStorage.getItem('four'));
        sessionStorage.setItem('value', 600)
        sessionStorage.setItem('categoryId', sessionStorage.getItem('four'))
        $('#24').empty('h2')
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
        // window.location.replace('https://ashethank.github.io/html/answer.html')
        })

        $('#25').on('click', () => {
          console.log('Hello')
          console.log(600);
          console.log(sessionStorage.getItem('five'));
          sessionStorage.setItem('value', 600)
          sessionStorage.setItem('categoryId', sessionStorage.getItem('five'))
          $('#25').empty('h2')
          // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
          // window.location.replace('https://ashethank.github.io/html/answer.html')
          })

          $('#26').on('click', () => {
            console.log('Hello')
            console.log(600);
            console.log(sessionStorage.getItem('six'));
            sessionStorage.setItem('value', 600)
            sessionStorage.setItem('categoryId', sessionStorage.getItem('six'))
            $('#26').empty('h2')
            // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
            // window.location.replace('https://ashethank.github.io/html/answer.html')
            })

// fourth row

$('#31').on('click', () => {
  console.log('Hello')
  console.log(800);
  console.log(sessionStorage.getItem('one'));
  sessionStorage.setItem('value', 800)
  sessionStorage.setItem('categoryId', sessionStorage.getItem('one'))
  $('#31').empty('h2')
  // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
  // window.location.replace('https://ashethank.github.io/html/answer.html')
  })

  $('#32').on('click', () => {
    console.log('Hello')
    console.log(800);
    console.log(sessionStorage.getItem('two'));
    sessionStorage.setItem('value', 800)
    sessionStorage.setItem('categoryId', sessionStorage.getItem('two'))
    $('#32').empty('h2')
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
    // window.location.replace('https://ashethank.github.io/html/answer.html')
    })

    $('#33').on('click', () => {
      console.log('Hello')
      console.log(800);
      console.log(sessionStorage.getItem('three'));
      sessionStorage.setItem('value', 800)
      sessionStorage.setItem('categoryId', sessionStorage.getItem('three'))
      $('#33').empty('h2')
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
      // window.location.replace('https://ashethank.github.io/html/answer.html')
      })

      $('#34').on('click', () => {
        console.log('Hello')
        console.log(800);
        console.log(sessionStorage.getItem('four'));
        sessionStorage.setItem('value', 800)
        sessionStorage.setItem('categoryId', sessionStorage.getItem('four'))
        $('#34').empty('h2')
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
        // window.location.replace('https://ashethank.github.io/html/answer.html')
        })

        $('#35').on('click', () => {
          console.log('Hello')
          console.log(800);
          console.log(sessionStorage.getItem('five'));
          sessionStorage.setItem('value', 800)
          sessionStorage.setItem('categoryId', sessionStorage.getItem('five'))
          $('#35').empty('h2')
          // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
          // window.location.replace('https://ashethank.github.io/html/answer.html')
          })

          $('#36').on('click', () => {
            console.log('Hello')
            console.log(800);
            console.log(sessionStorage.getItem('six'));
            sessionStorage.setItem('value', 800)
            sessionStorage.setItem('categoryId', sessionStorage.getItem('six'))
            $('#36').empty('h2')
            // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
            // window.location.replace('https://ashethank.github.io/html/answer.html')
            })

// fifth row

$('#41').on('click', () => {
  console.log('Hello')
  console.log(1000);
  console.log(sessionStorage.getItem('one'));
  sessionStorage.setItem('value', 1000)
  sessionStorage.setItem('categoryId', sessionStorage.getItem('one'))
  $('#41').empty('h2')
  // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
  // window.location.replace('https://ashethank.github.io/html/answer.html')
  })

  $('#42').on('click', () => {
    console.log('Hello')
    console.log(1000);
    console.log(sessionStorage.getItem('two'));
    sessionStorage.setItem('value', 1000)
    sessionStorage.setItem('categoryId', sessionStorage.getItem('two'))
    $('#42').empty('h2')
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
    // window.location.replace('https://ashethank.github.io/html/answer.html')
    })

    $('#43').on('click', () => {
      console.log('Hello')
      console.log(1000);
      console.log(sessionStorage.getItem('three'));
      sessionStorage.setItem('value', 1000)
      sessionStorage.setItem('categoryId', sessionStorage.getItem('three'))
      $('#43').empty('h2')
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
      // window.location.replace('https://ashethank.github.io/html/answer.html')
      })

      $('#44').on('click', () => {
        console.log('Hello')
        console.log(1000);
        console.log(sessionStorage.getItem('four'));
        sessionStorage.setItem('value', 1000)
        sessionStorage.setItem('categoryId', sessionStorage.getItem('four'))
        $('#44').empty('h2')
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
        // window.location.replace('https://ashethank.github.io/html/answer.html')
        })

        $('#45').on('click', () => {
          console.log('Hello')
          console.log(1000);
          console.log(sessionStorage.getItem('five'));
          sessionStorage.setItem('value', 1000)
          sessionStorage.setItem('categoryId', sessionStorage.getItem('five'))
          $('#45').empty('h2')
          // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
          // window.location.replace('https://ashethank.github.io/html/answer.html')
          })

          $('#46').on('click', () => {
            console.log('Hello')
            console.log(1000);
            console.log(sessionStorage.getItem('six'));
            sessionStorage.setItem('value', 1000)
            sessionStorage.setItem('categoryId', sessionStorage.getItem('six'))
            $('#46').empty('h2')
            // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/answer.html')
            // window.location.replace('https://ashethank.github.io/html/answer.html')
            })
})
