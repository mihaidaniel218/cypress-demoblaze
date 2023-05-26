import homePage from '../pages/homePage'

class About {
    get aboutUsTModalitle(){
        return cy.get("#videoModalLabel")
    }
    get closewithXBtn(){
        return cy.get("body.modal-open:nth-child(2) div.modal.fade.show:nth-child(4) div.modal-header button.close > span:nth-child(1)").should('exist').and('be.visible')
    }
    get video(){
        return cy.get("#example-video_html5_api")
    }

    get closeBtn(){
        return cy.get("body.modal-open:nth-child(2) div.modal.fade.show:nth-child(4) button.btn.btn-secondary")
    }
    get playvideoBtn (){
        return cy.get(".vjs-big-play-button")
    }



    openAboutUsModalVerifyModal(){
        homePage.aboutUsNavOption.scrollIntoView().should('exist').and('be.visible').click()
        this.closewithXBtn.should('exist').and('be.visible')
        this.aboutUsTModalitle.should('exist').and('be.visible')
        this.video.should('exist')
        this.closewithXBtn.should('exist').and('be.visible')
    }
    closeVideoModal(){
        cy.wait(300)
        this.closewithXBtn.should('exist').and('be.visible').click()
        this.openAboutUsModalVerifyModal()
        this.closeBtn.should('exist').and('be.visible').click()
        this.aboutUsTModalitle.should('not.be.visible')
    }
    playVideo(){
        // with line 50 and 51 it's validating that the video is paused from the beginning 
        this.video.should('exist').and(($video) => {
        expect($video.get(0).paused).to.be.true;
      })
      this.playvideoBtn.should('exist').and('be.visible').click()
      // in this line it's validating the video is playing
      this.video.should(($video) => {
        expect($video.get(0).paused).to.be.false;
      })
      // in this line it's validating the volume 
      this.video.invoke('prop', 'volume', 0.5)
      .should(($video) => {
        expect($video.get(0).volume).to.equal(0.5);
      })
      // in this line it's validating the video is pause again
      this.video.then(($video) => {
        $video.get(0).pause();
      })
      this.closeBtn.should('exist').and('be.visible').click()
      this.aboutUsTModalitle.should('not.be.visible')
    }
}

module.exports = new About()