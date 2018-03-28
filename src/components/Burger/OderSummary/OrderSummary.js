import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliaire/Auxi'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
// il est possible de rendre se composant en stateless 

    componentWillUpdate(){
        console.log("[OrderSummary] se met à jour")
    }

    render (){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
        });
        return (
            <Aux>
                <h3>Votre Commande</h3>
                <p>Votre Hamburger contient: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Prix: {this.props.price.toFixed(2)}€</strong></p>
                <p>Validez votre Commande ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ANNULER</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>VALIDER</Button>
            </Aux>
        )
    }
} ;

export default OrderSummary;