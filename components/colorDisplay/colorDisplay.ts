export module ColorDisplayModule
{
    class Helper
    {
        static UpdateNumber(e : Event) : number | null
        {    
            var element = <HTMLInputElement> e.srcElement;
            if (element.type !== "checkbox") 
            {
                return Helper.Clamp(parseInt(element.value),0, 255);
            }
            return null;    
        }

        static Clamp(num : number, min : number, max : number) : number
        {
            return num <= min ? min : num >= max ? max : num;
        }
    }

    class Color
    {
        R : number;
        G : number;
        B : number;

        constructor() 
        {
            this.R = 0;
            this.G = 0;
            this.B = 0;
        }

        static componentToHex(c : number) : string
        {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        static rgbToHex(r : number, g : number, b : number) : string
        {
            return "#" + 
                Color.componentToHex(r).toUpperCase() +
                Color.componentToHex(g).toUpperCase() +
                Color.componentToHex(b).toUpperCase();
        }

        public toString() : string
        {
            return Color.rgbToHex(this.R, this.G, this.B);
        }
    }

    export class ColorDisplay
    {
        public MyColor : Color;
        public RiotParent : any;
        
        constructor(parent : any, opts : any) 
        {
            this.MyColor = new Color();
            this.RiotParent = parent;
        }

        public UpdateR : (e : Event) => void =
        (e) =>
        {
            var result = Helper.UpdateNumber(e);
            if (result != null)
            {
                this.MyColor.R = result;
            }
        }

        public UpdateG : (e : Event) => void =
        (e) =>
        {
            var result = Helper.UpdateNumber(e);
            if (result != null)
            {
                this.MyColor.G = result;
            }
        }

        public UpdateB : (e : Event) => void =
        (e) =>
        {
            var result = Helper.UpdateNumber(e);
            if (result != null)
            {
                this.MyColor.B = result;
            }
        }
    }

    export function bootstrap(riotElem : any, opts : any) : void
    {
        riotElem.Inner = new ColorDisplayModule.ColorDisplay(riotElem, opts);
    }
}



