<colorDisplay if = { isReady }>
    <h1 style="color: { Inner.MyColor.toString()}">
        The color is { Inner.MyColor.toString() }
    </h1>
    <div class="ui input">
        <input type="number" value={ Inner.MyColor.R } onchange={ Inner.UpdateR }>
        <input type="number" value={ Inner.MyColor.G } onchange={ Inner.UpdateG }>
        <input type="number" value={ Inner.MyColor.B } onchange={ Inner.UpdateB }>
    </div>
<script>
   var colorDisplayModule = require("./colorDisplay");
   colorDisplayModule.ColorDisplayModule.bootstrap(this, this.opts);
</script>
</colorDisplay>