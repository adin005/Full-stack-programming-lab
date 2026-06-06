const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const Customer = require('./models/Customer');

const seedData = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  // Clear existing data
  await User.deleteMany({});
  await Customer.deleteMany({});

  // Create demo user
  const hashedPassword = await bcrypt.hash('password123', 12);
  const user = await User.create({
    name: 'Admin User',
    email: 'admin@crm.com',
    password: hashedPassword,
  });

  // 15 customers
  const customers = [
    { name: 'Ahmed Khan', email: 'ahmed.khan@techcorp.pk', phone: '0300-1234567', company: 'TechCorp Pakistan', address: 'Blue Area, Islamabad', status: 'Active', notes: 'Premium client', createdBy: user._id },
    { name: 'Sara Ali', email: 'sara.ali@designhub.pk', phone: '0321-2345678', company: 'Design Hub', address: 'Gulberg III, Lahore', status: 'Active', notes: 'UI/UX client', createdBy: user._id },
    { name: 'Bilal Raza', email: 'bilal@startup.io', phone: '0333-3456789', company: 'Startup.io', address: 'Clifton, Karachi', status: 'Lead', notes: 'Interested in enterprise plan', createdBy: user._id },
    { name: 'Fatima Malik', email: 'fatima.malik@agency.pk', phone: '0345-4567890', company: 'Digital Agency', address: 'F-7, Islamabad', status: 'Active', notes: 'Monthly retainer', createdBy: user._id },
    { name: 'Usman Tariq', email: 'usman@solutions.pk', phone: '0311-5678901', company: 'IT Solutions', address: 'Johar Town, Lahore', status: 'Inactive', notes: 'Contract ended March', createdBy: user._id },
    { name: 'Zara Sheikh', email: 'zara.sheikh@fashionpk.com', phone: '0322-6789012', company: 'Fashion PK', address: 'DHA Phase 5, Lahore', status: 'Active', notes: 'E-commerce project', createdBy: user._id },
    { name: 'Hassan Siddiqui', email: 'hassan@buildersltd.pk', phone: '0334-7890123', company: 'Builders Ltd', address: 'Pechs, Karachi', status: 'Lead', notes: 'Requested proposal', createdBy: user._id },
    { name: 'Ayesha Noor', email: 'ayesha.noor@medplus.pk', phone: '0346-8901234', company: 'MedPlus Clinics', address: 'Bahria Town, Rawalpindi', status: 'Active', notes: 'Healthcare portal', createdBy: user._id },
    { name: 'Kamran Javed', email: 'kamran@logictech.pk', phone: '0312-9012345', company: 'Logic Tech', address: 'Saddar, Rawalpindi', status: 'Lead', notes: 'Follow up scheduled', createdBy: user._id },
    { name: 'Rabia Hussain', email: 'rabia@foodexpress.pk', phone: '0323-0123456', company: 'Food Express', address: 'Model Town, Lahore', status: 'Active', notes: 'POS integration', createdBy: user._id },
    { name: 'Tariq Mehmood', email: 'tariq.mehmood@autoparts.pk', phone: '0335-1234560', company: 'Auto Parts Co.', address: 'Faisalabad Road', status: 'Inactive', notes: 'Paused subscription', createdBy: user._id },
    { name: 'Sana Iqbal', email: 'sana.iqbal@elearning.pk', phone: '0347-2345671', company: 'EduLearn PK', address: 'G-10, Islamabad', status: 'Active', notes: 'LMS platform', createdBy: user._id },
    { name: 'Asad Rehman', email: 'asad@proptech.pk', phone: '0313-3456782', company: 'PropTech', address: 'Gulshan-e-Iqbal, Karachi', status: 'Lead', notes: 'Real estate CRM interest', createdBy: user._id },
    { name: 'Maham Farooq', email: 'maham@greeneco.pk', phone: '0324-4567893', company: 'Green Eco Solutions', address: 'E-11, Islamabad', status: 'Active', notes: 'Sustainability project', createdBy: user._id },
    { name: 'Imran Butt', email: 'imran.butt@finserve.pk', phone: '0336-5678904', company: 'FinServe Ltd', address: 'MM Alam Road, Lahore', status: 'Active', notes: 'Banking software', createdBy: user._id },
  ];

  await Customer.insertMany(customers);

  console.log('✅ Seed complete!');
  console.log('📧 Login: admin@crm.com');
  console.log('🔑 Password: password123');
  process.exit(0);
};

seedData().catch((err) => { console.error(err); process.exit(1); });
