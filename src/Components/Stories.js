import pagesStories from "./pagesStories";
import Story from "./Story";

export default function Stories (){
    return (
            <div className="stories">
                {pagesStories.map((p) => (
                    <Story key={p.nome} img={p.img} nome={p.nome} />
                ))}
            
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
    );
}