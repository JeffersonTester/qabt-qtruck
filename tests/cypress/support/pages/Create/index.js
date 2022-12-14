
import modal from '../components/Modal'

class CreatePage {

    constructor() {
        this.modal = modal
    }

    form(foodtruck) {
        cy.get('input[name=name]').type(foodtruck.name)
        cy.get('textarea[name=details]').type(foodtruck.details)
        cy.get('input[name=opening-hours]').type(foodtruck.opening_hours)
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)

        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não')
            .click()
        // if (foodtruck.open_on_weekends === 'Sim')
        //     cy.contains('button', 'Sim').click()

        // if (foodtruck.open_on_weekends === 'Não')
        //     cy.contains('button', 'Não').click()
    }

    submit() {
        // Comparando Xpath com o contains do Cypress
        //button[text()="Cadastrar"]
        cy.contains('button', 'Cadastrar').click()
    }
}

export default new CreatePage()