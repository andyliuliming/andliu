(function () {
    require.config({
        baseUrl: '.',
        paths: {
            knockout: "./lib/knockout",
            komapping: "./lib/knockout.mapping-latest",
            text: "./lib/text",
            ztree: "lib/jquery.ztree.all-3.5",
            jquery: "./lib/jquery",
            jcookie: "./lib/jquery.cookie"
        },
        shim: {
            "jcookie": { "deps": ['jquery'] },
            "ztree": { "deps": ['jquery'] }
        }
    });

    require(["jquery",
        "common/shared/util",
        "jcookie",
        "ztree",
        "knockout",
        "komapping",
        "text",
        "manage/managementlayout/managementlayout",
        "manage/talentsmanagement/talentmanagement",
        "manage/githubrepo/githubrepomanagement",
        "manage/githubrepo/githubrepo-detail"],
        function ($,
            util,
            jcookie,
            ztree,
            ko,
            komapping,
            text,
            managementlayout,
            talentmanagement,
            githubrepo,
            githubrepodetail) {

            util.checkAccess("/common/login/login.html");

            managementlayout.vm.LayoutTitle("Talent Management");
            managementlayout.route("githubrepomanagement", "Github Repo", githubrepo.tmplId, new githubrepo.GithubRepoListViewModel);
            managementlayout.route("githubrepo-new", "Add Repo", githubrepodetail.tmplId, new githubrepodetail.GithubRepoDetailViewModel(), "githubrepomanagement");
            managementlayout.route("talentmanagement", "Talents", talentmanagement.tmplId, new talentmanagement.TalentListViewModel);

            managementlayout.init();

        });
})()