
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/07/2016 21:50:36
-- Generated from EDMX file: C:\Users\andliu\Documents\GitHub\azureimagehost\StarDustModel\StarDustGoldModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [stardustgold];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[AzureImages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AzureImages];
GO
IF OBJECT_ID(N'[dbo].[ImageBuckets]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ImageBuckets];
GO
IF OBJECT_ID(N'[dbo].[ImageBucketUsages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ImageBucketUsages];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'AzureImages'
CREATE TABLE [dbo].[AzureImages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [BucketName] nvarchar(50)  NOT NULL,
    [Name] nvarchar(50)  NOT NULL,
    [Type] nvarchar(max)  NOT NULL,
    [IsPorn] int  NOT NULL,
    [HotScore] int  NOT NULL,
    [NormalScore] int  NOT NULL,
    [PornScore] int  NOT NULL,
    [Timestamp] datetime  NOT NULL
);
GO

-- Creating table 'ImageBuckets'
CREATE TABLE [dbo].[ImageBuckets] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Timestamp] datetime  NOT NULL
);
GO

-- Creating table 'ImageBucketUsages'
CREATE TABLE [dbo].[ImageBucketUsages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [BucketName] nvarchar(max)  NOT NULL,
    [TotalStorage] bigint  NOT NULL,
    [ThroughPut] bigint  NOT NULL,
    [Timestamp] datetime  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'AzureImages'
ALTER TABLE [dbo].[AzureImages]
ADD CONSTRAINT [PK_AzureImages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ImageBuckets'
ALTER TABLE [dbo].[ImageBuckets]
ADD CONSTRAINT [PK_ImageBuckets]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ImageBucketUsages'
ALTER TABLE [dbo].[ImageBucketUsages]
ADD CONSTRAINT [PK_ImageBucketUsages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------