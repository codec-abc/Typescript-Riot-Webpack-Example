<counter>
  <h3>click count { currentValue }</h3>
  <button class="ui button" onclick={ clickPlus }>+</button>
  <button class="ui button" onclick={ clickMinus }>-</button>
  <script>
    var counterModule = require('./counter');
    counterModule.counter.call(this, this.opts);
  </script>
</counter>