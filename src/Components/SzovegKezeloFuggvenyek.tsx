import { useState } from "react"

export function SzovegKezelo() {
    const [szoveg,setSzoveg] = useState<string>("");

    function NagyBetu() {
        document.getElementById('szoveg-p')!.style.textTransform = 'uppercase';
    }

    function KisBetu() {
        document.getElementById('szoveg-p')!.style.textTransform = 'lowercase';
    }

    function Visszaalit() {
        document.getElementById('szoveg-p')!.style.textTransform = 'none'; 
        setSzoveg("");
    }
    
    return( 
        <>
            <input type="text" value={szoveg} name="text" id="text" onChange={(e) => setSzoveg(e.target.value)}/> <br/>
            <button onClick={NagyBetu}>Nagybetű</button>
            <button onClick={KisBetu}>KisBetű</button>
            <button onClick={Visszaalit}>Visszaállít</button> <br/>
            <p><span id="szoveg-p">{szoveg}</span></p>
            <p>
                {szoveg.length==0?
                    "Még nem írt be egy karaktert sem."
                    :
                    `Beírt kararkterek száma: ` + szoveg.length 
                }
            </p>
        </>
    )
}