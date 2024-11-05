namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("412266a7-98e2-43e9-a53e-d9a3430a20a6");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e468ff55-4e06-4175-b1a2-19853dbdbf7c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,227,48,16,189,23,246,63,12,102,15,54,4,209,94,183,31,176,201,166,75,160,108,151,198,233,165,236,65,145,39,174,22,125,24,73,78,155,45,253,239,29,89,14,117,157,44,116,46,178,70,111,222,204,123,30,195,53,250,134,11,132,18,157,227,222,110,2,155,89,179,145,117,235,120,144,214,156,188,124,57,1,138,214,75,83,195,114,231,3,234,243,97,106,88,167,181,53,255,125,116,200,230,38,200,32,209,127,6,195,230,91,52,97,15,125,232,210,187,46,119,35,105,8,131,46,95,138,71,212,252,23,73,128,75,200,86,222,221,33,87,97,119,237,16,43,171,87,139,172,248,147,170,155,118,173,164,0,161,184,247,144,64,71,248,224,27,76,185,199,35,47,137,165,119,98,64,104,183,52,187,172,16,182,86,86,112,107,22,198,163,11,36,42,183,235,191,40,2,120,52,21,186,9,36,206,41,110,72,97,199,252,221,213,30,176,120,103,28,144,199,88,211,32,108,72,184,103,194,226,252,35,50,81,131,235,84,145,15,121,74,20,169,96,4,174,80,72,205,21,52,78,138,104,90,170,98,63,49,148,187,6,171,153,85,173,54,247,92,181,120,209,67,175,242,104,236,239,136,95,45,127,100,227,238,114,3,121,34,187,130,179,211,125,20,31,65,35,109,49,144,45,252,140,27,129,10,43,154,35,184,22,137,249,16,231,131,139,59,66,75,234,121,141,37,234,70,241,16,39,55,248,4,55,86,112,37,255,241,181,194,101,135,203,123,61,43,114,141,182,216,208,47,160,21,102,119,232,109,235,4,129,172,35,150,9,28,246,137,113,100,131,210,14,102,19,200,14,122,121,214,249,180,240,165,181,83,89,167,91,86,176,210,246,179,20,159,16,68,66,82,130,93,91,167,121,200,71,66,169,241,25,59,157,126,61,240,61,70,120,116,246,169,51,98,254,44,176,137,82,247,245,99,248,235,251,181,255,164,227,245,13,240,229,54,234,253,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("14f8a049-3b21-2f1d-c6c3-0b661c2c0eda"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("e468ff55-4e06-4175-b1a2-19853dbdbf7c"),
				CreatedInSchemaUId = new Guid("412266a7-98e2-43e9-a53e-d9a3430a20a6"),
				ModifiedInSchemaUId = new Guid("412266a7-98e2-43e9-a53e-d9a3430a20a6")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("412266a7-98e2-43e9-a53e-d9a3430a20a6"));
		}

		#endregion

	}

	#endregion

}

