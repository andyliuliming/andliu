USE [stardustgold]
GO

--------Logistics ---------------------
CREATE NONCLUSTERED INDEX [IX_Logistics_0]
    ON [dbo].[Logistics]([Name] ASC);
GO

--------MicroShops ---------------------
CREATE NONCLUSTERED INDEX [IX_MicroShops_0]
    ON [dbo].[MicroShops]([UserId] ASC);
GO

--------MicroShopObservings ---------------------
CREATE NONCLUSTERED INDEX [IX_MicroShopObservings_0]
    ON [dbo].[MicroShopObservings]([UserId] ASC, [MicroShopId] ASC);
CREATE NONCLUSTERED INDEX [IX_MicroShopObservings_1]
    ON [dbo].[MicroShopObservings]([UserId] ASC);
GO

--------MicroShopShowProducts ------------------
CREATE NONCLUSTERED INDEX [IX_MicroShopShowProducts_0]
    ON [dbo].[MicroShopShowProducts]([ProductId] ASC)
CREATE NONCLUSTERED INDEX [IX_MicroShopShowProducts_1]
    ON [dbo].[MicroShopShowProducts]([ShowId] ASC)
GO

--------MicroShopShows -------------------------
CREATE NONCLUSTERED INDEX [IX_MicroShopShows_1]
    ON [dbo].[MicroShopShows]([MicroShopId] ASC)
GO

---------MicroShopStatistics--------------------
CREATE NONCLUSTERED INDEX [IX_MicroShopStatistics_0]
    ON [dbo].[MicroShopStatistics] ([MicroShopId] ASC)
GO

--------Orders-----------------------------------
CREATE NONCLUSTERED INDEX [IX_Orders_0]
    ON [dbo].[Orders] ([VendorId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_Orders_1]
    ON [dbo].[Orders] ([UserId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_Orders_2]
    ON [dbo].[Orders] ([MainOrderId] ASC);
GO

--------OrderItems-------------------------------
CREATE NONCLUSTERED INDEX [IX_OrderItems_0]
    ON [dbo].[OrderItems] ([OrderId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_OrderItems_1]
    ON [dbo].[OrderItems] ([LogisticNumber] ASC);
GO

--------OrderPayments----------------------------
CREATE NONCLUSTERED INDEX [IX_OrderPayments_0]
    ON [dbo].[OrderPayments] ([OrderId] ASC);
GO

--------OrderReceipts----------------------------
CREATE NONCLUSTERED INDEX [IX_OrderReceipts_0]
    ON [dbo].[OrderReceipts] ([OrderId] ASC);
GO

--------OrderReclaims----------------------------
CREATE NONCLUSTERED INDEX [IX_OrderReclaims_0]
    ON [dbo].[OrderReclaims] ([UserId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_OrderReclaims_1]
    ON [dbo].[OrderReclaims] ([OrderId] ASC);
GO

--------ProductCategories----------------------------
CREATE NONCLUSTERED INDEX [IX_ProductCategories_0]
    ON [dbo].[ProductCategories] ([Name] ASC);

--------ProductImages----------------------------
CREATE NONCLUSTERED INDEX [IX_ProductImages_0]
    ON [dbo].[ProductImages] ([ProductId] ASC);
GO

--------ProdutInShops----------------------------
CREATE NONCLUSTERED INDEX [IX_ProductInShops_0]
    ON [dbo].[ProductInShops]([ProductId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ProductInShops_1]
    ON [dbo].[ProductInShops]([ShopId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ProductInShops_2]
    ON [dbo].[ProductInShops]([ProductId] ASC, [ShopId] ASC);
GO

------- ProductObservings -----------------------
CREATE NONCLUSTERED INDEX [IX_ProductObservings_0]
    ON [dbo].[ProductObservings] ([UserId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ProductObservings_1]
    ON [dbo].[ProductObservings] ([UserId] ASC, [ProductId] ASC);
GO

------- ProductSaleRegions -----------------------
CREATE NONCLUSTERED INDEX [IX_ProductSaleRegions_0]
    ON [dbo].[ProductSaleRegions] ([ProductId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ProductSaleRegions_1]
    ON [dbo].[ProductSaleRegions] ([ProductId] ASC, [SaleRegionId] ASC);
GO

--------ProductSkus----------------------------
CREATE NONCLUSTERED INDEX [IX_ProductSkus_0]
    ON [dbo].[ProductSkus] ([ProductId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ProductSkus_1]
    ON [dbo].[ProductSkus] ([ProductId] ASC, [ProductType] ASC);
GO

------- SaleRegions -----------------------
CREATE NONCLUSTERED INDEX [IX_SaleRegions_0]
    ON [dbo].[SaleRegions] ([Name] ASC);
GO

------- ShoppingCartItems -----------------------
CREATE NONCLUSTERED INDEX [IX_ShoppingCartItems_0]
    ON [dbo].[ShoppingCartItems] ([UserId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_ShoppingCartItems_1]
    ON [dbo].[ShoppingCartItems] ([ProductSkuId] ASC);
GO

--------Users -----------------------------------
CREATE NONCLUSTERED INDEX [IX_Users_0]
    ON [dbo].[Users]([Cellphone] ASC, [Password] ASC);
GO

---------UserCertifications------------------
CREATE NONCLUSTERED INDEX [IX_UserCertifications_0]
    ON [dbo].[UserCertifications]([UserId] ASC);
GO

---------UserNotifications------------------
CREATE NONCLUSTERED INDEX [IX_UserNotifications_0]
    ON [dbo].[UserNotifications]([UserId] ASC);
GO

---------UserPickupAddresses------------------
CREATE NONCLUSTERED INDEX [IX_UserPickupAddresses_0]
    ON [dbo].[UserPickupAddresses]([UserId] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_UserPickupAddresses_1]
    ON [dbo].[UserPickupAddresses]([UserId] ASC, [Tag] ASC);
GO

--------Vendors-----------------------------------
CREATE NONCLUSTERED INDEX [IX_Vendors_0]
    ON [dbo].[Vendors] ([UserId] ASC);
GO

--------VendorBankInfoes-----------------------------------
CREATE NONCLUSTERED INDEX [IX_VendorBankInfoes_0]
    ON [dbo].[VendorBankInfoes] ([VendorId] ASC);
GO

--------VendorCertifications-----------------------------------
CREATE NONCLUSTERED INDEX [IX_VendorCertifications_0]
    ON [dbo].[VendorCertifications] ([VendorId] ASC);
GO

--------VendorStatistics-----------------------------------
CREATE NONCLUSTERED INDEX [IX_VendorStatistics_0]
    ON [dbo].[VendorStatistics] ([VendorId] ASC);
GO

--------VerificationCodes -----------------------
CREATE NONCLUSTERED INDEX [IX_VerificationCodes_0]
    ON [dbo].[VerificationCodes]([Cellphone] ASC,[Code] ASC);
GO

CREATE NONCLUSTERED INDEX [IX_VerificationCodes_1]
    ON [dbo].[VerificationCodes]([Cellphone] ASC);
GO
