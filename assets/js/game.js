$(document).ready(function () {
  function generateRandomNumber () {
    var num = function () { return Math.floor((Math.random() * 120) + 1) }
    var random = num()
    if (random < 19) {
      return generateRandomNumber()
    }
    return random
  }

  var randomNumber = generateRandomNumber()

  function assignNumbers () {
    $('img').each(function (index) {
      var num = Math.floor((Math.random() * 12) + 1)
      $(this).attr('data-number', num)
    })
    $('#randomNumber').html(randomNumber)
    $('#playerTotal').html(0)
  }
  assignNumbers()

  function assignOnClicks () {
    $('img').each(function (index) {
      $(this).on('click',function () {
        var total = $('#playerTotal').html()
        total = parseInt(total)
        var cageNum = $(this).attr('data-number')
        cageNum = parseInt(cageNum)
        total += cageNum
        $('#playerTotal').html(total)
        checkMatch(total, randomNumber)
      })
    })
  }
  assignOnClicks()

  function checkMatch (player, number) {
    if (player === number) {
      alert('congrats you won')
      var wins = $('#wins').html()
      wins = parseInt(wins) + 1
      $('#wins').html(wins)
      reload()
    } else if (player > number) {
      alert('oops, you had a few too many')
      var losses = $('#losses').html()
      losses = parseInt(losses) + 1
      $('#losses').html(losses)
      reload()
    }
  }

  function reload () {
    $('img').each(function (index) {
      $(this).off()
    })
    randomNumber = generateRandomNumber()
    assignNumbers()
    assignOnClicks()
  }
})
