
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 06/24/2015 16:12:16
-- Generated from EDMX file: C:\Users\andliu\Documents\GitHub\andliu\WebConsole\AzureWebConsoleDomain\AzureWebConsoleModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [azurewebconsoledb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[SteppingNodes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SteppingNodes];
GO
IF OBJECT_ID(N'[dbo].[AzureVirtualMachines]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AzureVirtualMachines];
GO
IF OBJECT_ID(N'[dbo].[AzureSubscriptions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AzureSubscriptions];
GO
IF OBJECT_ID(N'[dbo].[TerminalFiles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TerminalFiles];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'SteppingNodes'
CREATE TABLE [dbo].[SteppingNodes] (
    [Id] bigint IDENTITY(1,1) NOT NULL,
    [Address] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'AzureVirtualMachines'
CREATE TABLE [dbo].[AzureVirtualMachines] (
    [Id] bigint IDENTITY(1,1) NOT NULL,
    [SubscriptionId] nvarchar(max)  NOT NULL,
    [HostServiceName] nvarchar(max)  NOT NULL,
    [Url] nvarchar(max)  NOT NULL,
    [Port] bigint  NULL,
    [OS] nvarchar(max)  NOT NULL,
    [DeploymentName] nvarchar(max)  NOT NULL,
    [RoleInstanceName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'AzureSubscriptions'
CREATE TABLE [dbo].[AzureSubscriptions] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SubscriptionId] nvarchar(max)  NOT NULL,
    [AADTenant] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'TerminalFiles'
CREATE TABLE [dbo].[TerminalFiles] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Path] nvarchar(max)  NOT NULL,
    [ParentPath] nvarchar(max)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'SteppingNodes'
ALTER TABLE [dbo].[SteppingNodes]
ADD CONSTRAINT [PK_SteppingNodes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AzureVirtualMachines'
ALTER TABLE [dbo].[AzureVirtualMachines]
ADD CONSTRAINT [PK_AzureVirtualMachines]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AzureSubscriptions'
ALTER TABLE [dbo].[AzureSubscriptions]
ADD CONSTRAINT [PK_AzureSubscriptions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TerminalFiles'
ALTER TABLE [dbo].[TerminalFiles]
ADD CONSTRAINT [PK_TerminalFiles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------