
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/09/2016 13:35:22
-- Generated from EDMX file: C:\Users\andliu\Documents\GitHub\andliu\TalentGraber\Model\StarDustGoldModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [talentgrabergold];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[GithubRepoes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[GithubRepoes];
GO
IF OBJECT_ID(N'[dbo].[TalentCandidates]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TalentCandidates];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'GithubRepoes'
CREATE TABLE [dbo].[GithubRepoes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Url] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'TalentCandidates'
CREATE TABLE [dbo].[TalentCandidates] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [Company] nvarchar(max)  NOT NULL,
    [Location] nvarchar(max)  NOT NULL,
    [Followers] nvarchar(max)  NOT NULL,
    [ReposUrl] nvarchar(max)  NOT NULL,
    [FollowersUrl] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'GithubAccounts'
CREATE TABLE [dbo].[GithubAccounts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'GithubRepoes'
ALTER TABLE [dbo].[GithubRepoes]
ADD CONSTRAINT [PK_GithubRepoes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TalentCandidates'
ALTER TABLE [dbo].[TalentCandidates]
ADD CONSTRAINT [PK_TalentCandidates]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'GithubAccounts'
ALTER TABLE [dbo].[GithubAccounts]
ADD CONSTRAINT [PK_GithubAccounts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------