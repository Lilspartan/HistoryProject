import { useState} from 'react'
import data from '../events.json'

const Main = () => {
    const [chosen, setChosen] = useState(data[0]);

    const onChange = (e) => {
        var target = e.target.value;
        for (var i = 0; i < data.length; i ++) {
            if (data[i].id === target) setChosen(data[i])
        }
    }

    return (
        <div className = "uk-background-secondary" style = {{ height: 'auto', minHeight: '100vh' }}>
            <h1 style = {{ color: 'white', textAlign: 'center' }}>Different Views About...</h1>
            <div style = {{ width: '30vw', margin: 'auto', padding: '20px'}}>
                <select class="uk-select" onChange = {onChange}>
                    {data.map(event => (
                        <option value = { event.id }>{ event.name }</option>
                    ))}
                </select>
            </div>

            <div>
                <div id = "btnarea" uk-scrollspy="target: > .t; cls: uk-animation-slide-bottom-small; delay: 200">
                    <div className = "t">
                        <button class="uk-button uk-button-danger uk-button-large t" type = "button">Reactionary</button>
                        <div uk-drop="pos: top">
                            <div class="uk-card uk-card-body uk-card-default">
                                { chosen.views.reactionary }
                            </div>
                        </div>
                    </div>

                    <div className = "t">
                        <button class="uk-button uk-button-danger uk-button-large t" type = "button">Conservative</button>
                        <div uk-drop="pos: top">
                            <div class="uk-card uk-card-body uk-card-default">
                                { chosen.views.conservative }
                            </div>
                        </div>
                    </div>

                    <div className = "t">
                        <button class="uk-button uk-button-primary uk-button-large t" type = "button">Liberal</button>
                        <div uk-drop="pos: top">
                            <div class="uk-card uk-card-body uk-card-default">
                                { chosen.views.liberal }
                            </div>
                        </div>
                    </div>

                    <div className = "t">
                        <button class="uk-button uk-button-primary uk-button-large t" type = "button">Radical</button>
                        <div uk-drop="pos: top">
                            <div class="uk-card uk-card-body uk-card-default">
                                { chosen.views.radical }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer style = {{ position: 'absolute', bottom: '0', display: 'block', width: '100vw', textAlign: 'center' }}>Made by Gabe Krahulik</footer>
        </div>
    )
}

export default Main
