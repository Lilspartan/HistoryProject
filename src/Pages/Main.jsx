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

		const Button = ({ name, type, text }) => {
			return (
				<div className = "t">
						<button class={`uk-button uk-button-${type} uk-button-large t`} type = "button">{ name }</button>
						<div uk-drop="pos: top; offset: 50">
								<div class="uk-card uk-card-body uk-card-default">
										{text}
								</div>
						</div>
				</div>
			)
		}

    return (
        <div className = "uk-background-secondary" style = {{ height: 'auto', minHeight: '100vh' }}>
					<div style = {{ textAlign: 'center', paddingTop: '30px' }} uk-scrollspy="target: > h1; cls: uk-animation-fade; delay: 500">
							<h1 style = {{ color: 'white', textAlign: 'center' }}>Different </h1>
							<h1 style = {{ color: 'white', textAlign: 'center' }}> Views </h1>
							<h1 style = {{ color: 'white', textAlign: 'center' }}> About</h1>
							<h1 style = {{ color: 'white', textAlign: 'center' }}>.</h1>
							<h1 style = {{ color: 'white', textAlign: 'center' }}>.</h1>
							<h1 style = {{ color: 'white', textAlign: 'center' }}>.</h1>
						</div>
            <div style = {{ width: '30vw', margin: 'auto', padding: '20px'}}>
                <select class="uk-select" onChange = {onChange}>
                    {data.map(event => (
                        <option value = { event.id }>{ event.name }</option>
                    ))}
                </select>
            </div>

            <div>
                <div id = "btnarea" uk-scrollspy="target: > .t; cls: uk-animation-scale-up; delay: 250">
                    <Button name = "Reactionary" type = "danger" text = {chosen.views.reactionary} />
                    <Button name = "Conservative" type = "danger" text = {chosen.views.conservative} />
                    <Button name = "Liberal" type = "primary" text = {chosen.views.liberal} />
                    <Button name = "Radical" type = "primary" text = {chosen.views.radical} />
                </div>
            </div>
            <footer className = "uk-animation-slide-bottom">Made by Gabe Krahulik</footer>
        </div>
    )
}

export default Main
