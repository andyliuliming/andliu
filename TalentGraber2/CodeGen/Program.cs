using Macrodeek.StarDustModel;
using Macrodeek.StarDustModel.WrapUp;
using Macrodeek.StarDustProductService.Controllers.Payments;
using System;
using System.Collections.Generic;
using System.IO;

namespace CodeGen
{
    class Program
    {
        private static readonly string OUTPUT_DIR = ".";

        static void Main(string[] args)
        {
            var outputDir = OUTPUT_DIR;
            if (args.Length > 0 && !String.IsNullOrEmpty(args[0]))
            {
                outputDir = args[0];
            }

            var converter = new JavaConverter();
            var models = GetModels();
            foreach (var model in models)
            {
                var code = converter.GenJavaCode(model);
                var fileName = model.Name + ".java";
                fileName = Path.Combine(outputDir, fileName);
                Console.WriteLine("Generating: " + fileName);
                File.WriteAllText(fileName, code);
            }
        }

        static List<Type> GetModels()
        {
            List<Type> models = new List<Type>() {
                //Wrapups
                typeof(HappyActivity),
                typeof(ImageToken),
                typeof(OrderDetail),
                typeof(ProductDetail),
                typeof(ServiceEntry),
                typeof(UserDetail),
                typeof(UserToken),
                typeof(PaymentRequest),
                typeof(MainPayment),
                typeof(MicroShopShowDetail),
                typeof(ProductObservingDetail),
                typeof(MicroShopObservingDetail),

                //Models
                typeof(Product),
                typeof(Logistic),
                typeof(MicroShop),
                typeof(MicroShopDetail),
                typeof(MicroShopBankInfo),
                typeof(MicroShopCertification),
                typeof(MicroShopComplaint),
                typeof(MicroShopObserving),
                typeof(MicroShopPayment),
                typeof(MicroShopShow),
                typeof(Order),
                typeof(OrderComment),
                typeof(OrderItem),
                typeof(OrderPayment),
                typeof(OrderReceipt),
                typeof(OrderReclaim),
                typeof(Product),
                typeof(ProductDetail),
                typeof(ProductCategory),
                typeof(ProductComment),
                typeof(ProductComplaint),
                typeof(ProductImage),
                typeof(ProductInShop),
                typeof(ProductObserving),
                typeof(ProductSaleRegion),
                typeof(ProductSku),
                typeof(SaleRegion),
                typeof(SearchIndexCheckPoint),
                typeof(ShoppingCartItem),
                typeof(ShowComment),
                typeof(SystemFeedback),
                typeof(User),
                typeof(UserCertification),
                typeof(UserNotification),
                typeof(UserPickupAddress),
                typeof(UserRoles),
                typeof(UserSetting),
                typeof(Vendor),
                typeof(VendorBankInfo),
                typeof(VendorCertification),
                typeof(VendorComplaint),
                typeof(VendorPayment),
                typeof(VendorSupport),
                typeof(VerificationCode),
                typeof(LinkedMicroShop)
            };

            return models;
        }
    }
}
