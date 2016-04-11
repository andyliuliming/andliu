USE [talentgrabergold]
GO

--------Logistics ---------------------
CREATE NONCLUSTERED INDEX [IX_ContributerToRepo_0]
    ON [dbo].[ContributerToRepo]([RepoId] ASC);
GO