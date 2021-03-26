
/* скрипт по добавлению датаатрибутов */
jQuery('.icon-impaired').attr('itemprop','copy');

jQuery('#accreditationDocLink').find('a').attr('itemprop','accreditationDocLink');
jQuery('#prescriptionDocLink').find('a').attr('itemprop','prescriptionDocLink');
/* проверяет наличие ссылки, если есть удаляет атр и добавляет к ссылке */
let websiteUchred = jQuery("[itemprop='websiteUchred']").find('a');
if(websiteUchred.length) {

  jQuery("[itemprop='websiteUchred']").removeAttr('itemprop','websiteUchred').find('a').attr('itemprop','websiteUchred');
}

let mailUchred = jQuery("[itemprop='mailUchred']").find('a');
if(mailUchred.length) {

  jQuery("[itemprop='mailUchred']").removeAttr('itemprop','mailUchred').find('a').attr('itemprop','mailUchred');
}

let email = jQuery("[itemprop='email']").find('a');
if(email.length) {

  jQuery("[itemprop='email']").removeAttr('itemprop','email').find('a').attr('itemprop','email');
}

jQuery("#divisionClauseDocLink").find('a').attr('itemprop','divisionClauseDocLink');

let educationShedule = jQuery("[itemprop='educationShedule']").find('a');
if(educationShedule.length) {

  jQuery("[itemprop='educationShedule']").removeAttr('itemprop','educationShedule').find('a').attr('itemprop','educationShedule');
}

let opMain = jQuery("[itemprop='opMain']").find('a');
if(opMain.length) {

  jQuery("[itemprop='opMain']").removeAttr('itemprop','opMain').find('a').attr('itemprop','opMain');
}

let educationAnnotation = jQuery("[itemprop='educationAnnotation']").find('a');
if(educationAnnotation.length) {

  jQuery("[itemprop='educationAnnotation']").removeAttr('itemprop','educationAnnotation').find('a').attr('itemprop','educationAnnotation');
}

let eduEl = jQuery("[itemprop='eduEl']").find('a');
if(eduEl.length) {

  jQuery("[itemprop='eduEl']").removeAttr('itemprop','eduEl').find('a').attr('itemprop','eduEl');
}

let eduFedDoc = jQuery("[itemprop='eduFedDoc']").find('a');
if(eduFedDoc.length) {

  jQuery("[itemprop='eduFedDoc']").removeAttr('itemprop','eduFedDoc').find('a').attr('itemprop','eduFedDoc');
}

let eduStandartDoc = jQuery("[itemprop='eduStandartDoc']").find('a');
if(eduStandartDoc.length) {

  jQuery("[itemprop='eduStandartDoc']").removeAttr('itemprop','eduStandartDoc').find('a').attr('itemprop','eduStandartDoc');
}

let addressPlace = jQuery("[itemprop='addressPlace']").find('a');
if(addressPlace.length) {

  jQuery("[itemprop='addressPlace']").removeAttr('itemprop','addressPlace').find('a').attr('itemprop','addressPlace');
}

let site = jQuery("[itemprop='site']").find('a');
if(site.length) {

  jQuery("[itemprop='site']").removeAttr('itemprop','site').find('a').attr('itemprop','site');
}

let modeDocLink = jQuery("[itemprop='modeDocLink']").find('a');
if(modeDocLink.length) {

  jQuery("[itemprop='modeDocLink']").removeAttr('itemprop','modeDocLink').find('a').attr('itemprop','modeDocLink');
}

let priemDocLink = jQuery("[itemprop='priemDocLink']").find('a');
if(priemDocLink.length) {

  jQuery("[itemprop='priemDocLink']").removeAttr('itemprop','priemDocLink').find('a').attr('itemprop','priemDocLink');
}

let tekKontrolDocLink = jQuery("[itemprop='tekKontrolDocLink']").find('a');
if(tekKontrolDocLink.length) {

  jQuery("[itemprop='tekKontrolDocLink']").removeAttr('itemprop','tekKontrolDocLink').find('a').attr('itemprop','tekKontrolDocLink');
}

let ustavDocLink = jQuery("[itemprop='ustavDocLink']").find('a');
if(ustavDocLink.length) {

  jQuery("[itemprop='ustavDocLink']").removeAttr('itemprop','ustavDocLink').find('a').attr('itemprop','ustavDocLink');
}

let reportEduDocink = jQuery("[itemprop='reportEduDocink']").find('a');
if(ustavDocLink.length) {

  jQuery("[itemprop='reportEduDocink']").removeAttr('itemprop','reportEduDocink').find('a').attr('itemprop','reportEduDocink');
}

let localActStud = jQuery("[itemprop='localActStud']").find('a');
if(localActStud.length) {

  jQuery("[itemprop='localActStud']").removeAttr('itemprop','localActStud').find('a').attr('itemprop','localActStud');
}

let localActOrder = jQuery("[itemprop='localActOrder']").find('a');
if(localActOrder.length) {

  jQuery("[itemprop='localActOrder']").removeAttr('itemprop','localActOrder').find('a').attr('itemprop','localActOrder');
}

let perevodDocLink = jQuery("[itemprop='perevodDocLink']").find('a');
if(perevodDocLink.length) {

  jQuery("[itemprop='perevodDocLink']").removeAttr('itemprop','perevodDocLink').find('a').attr('itemprop','perevodDocLink');
}

let vozDocLink = jQuery("[itemprop='vozDocLink']").find('a');
if(vozDocLink.length) {

  jQuery("[itemprop='vozDocLink']").removeAttr('itemprop','vozDocLink').find('a').attr('itemprop','vozDocLink');
}

let teachingStaff = jQuery("[itemprop='teachingStaff']").find('a');
if(teachingStaff.length) {

  jQuery("[itemprop='teachingStaff']").removeAttr('itemprop','teachingStaff').find('a').attr('itemprop','teachingStaff');
}

let localAct = jQuery("[itemprop='localAct']").find('a');
if(localAct.length) {

  jQuery("[itemprop='localAct']").removeAttr('itemprop','localAct').find('a').attr('itemprop','localAct');
}

let support = jQuery("[itemprop='support']").find('a');
if(support.length) {

  jQuery("[itemprop='support']").removeAttr('itemprop','support').find('a').attr('itemprop','support');
}

let paidParents = jQuery("[itemprop='paidParents']").find('a');
if(paidParents.length) {

  jQuery("[itemprop='paidParents']").removeAttr('itemprop','paidParents').find('a').attr('itemprop','paidParents');
}

let paidEdu = jQuery("[itemprop='paidEdu']").find('a');
if(paidParents.length) {

  jQuery("[itemprop='paidEdu']").removeAttr('itemprop','paidEdu').find('a').attr('itemprop','paidEdu');
}

let finBMVolume = jQuery("[itemprop='finBMVolume']").find('a');
if(finBMVolume.length) {

  jQuery("[itemprop='finBMVolume']").removeAttr('itemprop','finBMVolume').find('a').attr('itemprop','finBMVolume');
}

let finPost = jQuery("[itemprop='finPost']").find('a');
if(finPost.length) {

  jQuery("[itemprop='finPost']").removeAttr('itemprop','finPost').find('a').attr('itemprop','finPost');
}

let finRas = jQuery("[itemprop='finRas']").find('a');
if(finRas.length) {

  jQuery("[itemprop='finRas']").removeAttr('itemprop','finRas').find('a').attr('itemprop','finRas');
}






