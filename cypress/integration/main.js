describe('Main integration test', () => {
  beforeEach(() => {
    cy.fixture('constants').as('constants');
  });

  it('shows and hides 2 articles', function() {
    cy.server();
    cy.visit('/');
    cy.get('.card').eq(0).click();
    cy.get('.enlarged-card-background').should('exist');
    cy.get('.card.enlarged').should('exist');
    cy.get('.enlarged-card-background').click();
    // Shouldn't be any element with those classes after hiding the card
    cy.get('.enlarged-card-background').should('not.exist');
    cy.get('.card.enlarged').should('not.exist');
    cy.get('.enlarged-card-background').should('not.exist');
    // Show another card
    cy.get('.card').eq(1).click();
    cy.get('.enlarged-card-background').should('exist');
    cy.get('.card.enlarged').should('exist');
    cy.get('.enlarged-card-background').click();
    // Shouldn't be any element with those classes after hiding the card
    cy.get('.enlarged-card-background').should('not.exist');
    cy.get('.card.enlarged').should('not.exist');
    cy.get('.enlarged-card-background').should('not.exist');
  });

  it('edits an article and saves it correctly', function() {
    cy.get('.card').eq(0).click();
    cy.get('#edit-button').click();
    cy.get('#title-input').type(`{selectall}${this.constants.modifiedArticle.title}`);
    cy.get('#author-input').type(`{selectall}${this.constants.modifiedArticle.author}`);
    cy.get('#content-input').type(`{selectall}${this.constants.modifiedArticle.content}`);
    cy.get('#tags-input').type(`{selectall}${this.constants.modifiedArticle.tags}`);
    cy.get('#save-button').click();
    // Check that the data is saved
    cy.get('#title').contains(this.constants.modifiedArticle.title);
    cy.get('#author').contains(this.constants.modifiedArticle.author);
    cy.get('#content').contains(this.constants.modifiedArticle.content);
    cy.get('#tags').contains(this.constants.modifiedArticle.tagsAdjusted);
    // Reload the page to check if the article is saved indeed
    cy.visit('/');
    cy.get('.card').eq(0).click();
    cy.get('#title').contains(this.constants.modifiedArticle.title);
    cy.get('#author').contains(this.constants.modifiedArticle.author);
    cy.get('#content').contains(this.constants.modifiedArticle.content);
    cy.get('#tags').contains(this.constants.modifiedArticle.tagsAdjusted);
    cy.get('.enlarged-card-background').click();
  });

  it('deletes an article', function() {
    cy.get('.card').eq(0).click();
    cy.get('#delete-button').click();
    // Check that that article no longer exists
    cy.get('.card').eq(0).click();
    cy.get('#title').should('not.have.text', this.constants.modifiedArticle.title);
    cy.get('#author').should('not.have.text', this.constants.modifiedArticle.author);
    cy.get('#content').should('not.have.text', this.constants.modifiedArticle.content);
    cy.get('#tags').should('not.have.text', this.constants.modifiedArticle.tags);
  });

  it('creates a new article', function() {
    cy.get('#new-article-button').click();
    cy.get('#title-input').type(`{selectall}${this.constants.newArticle.title}`);
    cy.get('#author-input').type(`{selectall}${this.constants.newArticle.author}`);
    cy.get('#content-input').type(`{selectall}${this.constants.newArticle.content}`);
    cy.get('#tags-input').type(`{selectall}${this.constants.newArticle.tags}`);
    cy.get('#save-button').click();
    cy.get('.enlarged-card-background').click();
    // Check that the new card is added
    cy.get('.card').each($card => {
        if ($card.find('p').text() === this.constants.newArticle.content.slice(0, 350))
          cy.wrap($card).click();
    });
    cy.get('#title').contains(this.constants.newArticle.title);
    cy.get('#author').contains(this.constants.newArticle.author);
    cy.get('#content').contains(this.constants.newArticle.content);
    cy.get('#tags').contains(this.constants.newArticle.tagsAdjusted);
  });
});