import { useState } from "react"

export function SzovegKezelo() {
    const [szoveg,setSzoveg] = useState<string>("");
    const [mondat,setMondat] = useState<string>("");
    const [bool,setBool] = useState(false);

    function NagyBetu() {
        document.getElementById('szoveg-p')!.style.textTransform = 'uppercase';
    }

    function KisBetu() {
        document.getElementById('szoveg-p')!.style.textTransform = 'lowercase';
    }

    function Visszaalit() {
        setBool(false)
        document.getElementById('szoveg-p')!.style.textTransform = 'none';
        document.getElementById('szoveg-p')!.classList.remove("forditott");
        // setSzoveg("");
    }

    function Szokezdo() {
        document.getElementById('szoveg-p')!.style.textTransform = 'capitalize';
    }

    function Mondatkezdo() {
        let list = szoveg.split(".");
        let vegso = "";
        setBool(true);
        list.forEach(mondat => {
            const trim = mondat.trim();
            const upper = trim.charAt(0).toUpperCase();
            const full = trim.replace(trim[0],upper)
            vegso += `${full}. `
        })
        vegso = vegso.trim().slice(0,vegso.length-2);

        setMondat(vegso);
    }

    function Fordit() {
        document.getElementById('szoveg-p')!.classList.toggle('forditott');
    }
    
    return( 
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="felvetel">
                        <div className="mb-3">
                            <input className="form-control" placeholder="Ide írd a szöveget..." type="text" value={szoveg} name="text" id="text" onChange={(e) =>{ 
                                bool?
                                setMondat(e.target.value)
                                :
                                setSzoveg(e.target.value);
                            }}/>
                        </div>
                        <button className="btn btn-primary" onClick={NagyBetu}>Nagybetű</button>
                        <button className="btn btn-primary"  onClick={KisBetu}>Kisbetű</button>
                        <button className="btn btn-primary"  onClick={Szokezdo}>Szavak eleje</button>
                        <button className="btn btn-primary"  onClick={Mondatkezdo}>Mondatok eleje</button>
                        <button className="btn btn-primary"  onClick={Fordit}>Megfordítás</button>
                        <button className="btn btn-danger"  onClick={Visszaalit}>Visszaállít</button>
                    </div>
                    <p><span id="szoveg-p">
                            {
                                bool?
                                mondat
                                :
                                szoveg
                            }
                        </span>
                    </p>
                    <p>
                        {szoveg.length==0?
                            "Még nem írt be egy karaktert sem."
                            :
                            `Beírt kararkterek száma: ` + szoveg.length 
                        }
                    </p>
                </div>
            </div>
        </>
    )
}