'use strict';

$('body').ready(initPage());

function initPage() {
    var strHtml = '';
    var projects = getProjects();
    projects.forEach((project) => {
        strHtml += `
            <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" onclick="onOpenModal(this)" data-proj="${project.id}" data-toggle="modal" href="#portfolioModal1">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${project.id}.png" />
                </a>
                <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.title}!</p>
                </div>
            </div>`;
    });
    $('.proj-container').html(strHtml);
}

function onOpenModal(elLink) {
    var projId = $(elLink).data('proj');
    var project = getProjectById(projId);
    $('.portfolio-modal .modal-body h2').text(project.name);
    $('.portfolio-modal .modal-body .item-intro').text(project.title);
    $('.portfolio-modal .modal-body img').attr('src', `img/portfolio/${project.id}.png`);
    $('.portfolio-modal .modal-body .item-desc').text(project.desc);
    $('.portfolio-modal .modal-body .publish-date').text(new Date(project.publishedAt).toDateString());
    $('.portfolio-modal .modal-body .btn-show-proj').data('proj', projId);
}

function onShowProject(elBtn) {
    var projId = $(elBtn).data('proj');
    var project = getProjectById(projId);
    window.open(project.url, '_blank');
}