USE [talentgrabergold]
GO

--------Logistics ---------------------
CREATE NONCLUSTERED INDEX [IX_ContributerToRepoes_0]
    ON [dbo].[ContributerToRepoes]([RepoId] ASC);
GO