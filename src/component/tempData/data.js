import individuals from "@/assets/whoWeHelp/hero/individuals.svg";
import freelancers from "@/assets/whoWeHelp/hero/freelancers.svg";
import soleTraders from "@/assets/whoWeHelp/hero/soleTraders.svg";
import smallBusinesses from "@/assets/whoWeHelp/hero/smallBusiness.svg";
import limitedCompany from "@/assets/whoWeHelp/hero/limitedCompany.svg";
import contractorsAccounting from "@/assets/whoWeHelp/hero/contratorsAccounting.svg";
import Subtract from "@/assets/pricing/Subtract.svg";
import SubtractAgain from "@/assets/pricing/SubtractAgain.svg";

// intopics - intro
import one from "@/assets/whoWeHelp/intopics/intro/one.svg";
import two from "@/assets/whoWeHelp/intopics/intro/two.svg";
import three from "@/assets/whoWeHelp/intopics/intro/three.svg";
import five from "@/assets/whoWeHelp/intopics/intro/five.svg";
import six from "@/assets/whoWeHelp/intopics/intro/six.svg";
import seven from "@/assets/whoWeHelp/intopics/intro/seven.svg";
import eight from "@/assets/whoWeHelp/intopics/intro/eaigth.svg";
import nine from "@/assets/whoWeHelp/intopics/intro/nine.svg";

// intopics - limitedaccounts
import ten from "@/assets/whoWeHelp/intopics/limitedaccounts/ten.svg";
import eleven from "@/assets/whoWeHelp/intopics/limitedaccounts/eleven.svg";
import twelve from "@/assets/whoWeHelp/intopics/limitedaccounts/tvelve.svg";
import thirteen from "@/assets/whoWeHelp/intopics/limitedaccounts/therteen.svg";
import fourteen from "@/assets/whoWeHelp/intopics/limitedaccounts/fourteen.svg";

// intopics - small business
import twenty from "@/assets/whoWeHelp/intopics/small business/twnty.svg";
import twentyOne from "@/assets/whoWeHelp/intopics/small business/twoone.svg";
import twentyTwo from "@/assets/whoWeHelp/intopics/small business/twtw.svg";
import twentyThree from "@/assets/whoWeHelp/intopics/small business/twthree.svg";
import twentyFour from "@/assets/whoWeHelp/intopics/small business/twfour.svg";
import twentyFive from "@/assets/whoWeHelp/intopics/twfive.svg";

// intopics - remainingpics
import twentySix from "@/assets/whoWeHelp/intopics/reaminingpics/twsix.svg";
import twentySeven from "@/assets/whoWeHelp/intopics/reaminingpics/twseven.svg";
import twentyEight from "@/assets/whoWeHelp/intopics/reaminingpics/tweaght.svg";
import twentyNine from "@/assets/whoWeHelp/intopics/reaminingpics/twnine.svg";
import thirty from "@/assets/whoWeHelp/intopics/reaminingpics/tirthy.svg";
import thirtyOne from "@/assets/whoWeHelp/intopics/reaminingpics/thone.svg";
import thirtyTwo from "@/assets/whoWeHelp/intopics/reaminingpics/thtwo.svg";
import thirtyThree from "@/assets/whoWeHelp/intopics/reaminingpics/ththree.svg";
import thirtyFour from "@/assets/whoWeHelp/intopics/reaminingpics/thfour.svg";

import fourWhyUs from "@/assets/whoWeHelp/whyUs/fourWhyUs.svg";
import oneWhyUs from "@/assets/whoWeHelp/whyUs/OnewhyUS.svg";
import twoWhyUs from "@/assets/whoWeHelp/whyUs/twoWhyUs.svg";
import threeWhyUs from "@/assets/whoWeHelp/whyUs/threeWhyUs.svg";
import fiveWhyUs from "@/assets/whoWeHelp/whyUs/fiveWhyUs.svg";

// why us section 2
import whyUsone from "@/assets/whoWeHelp/whyUs/whyUsTwo/one.svg";
import whyUstwo from "@/assets/whoWeHelp/whyUs/whyUsTwo/two.svg";

import wwdone from "@/assets/whoWeHelp/whatWeDo/wwdone.svg";
import wwdtwo from "@/assets/whoWeHelp/whatWeDo/wwdtwo.svg";
import wwdthree from "@/assets/whoWeHelp/whatWeDo/wwdthree.svg";

const Data = [
  // individuals
  {
    slug: "individuals",
    title: "Support for Individuals",
    paragraph1:
      "Managing your personal finances and tax responsibilities doesn't have to be stressful. At Online Taxation, we offer simple, fully managed bookkeeping and personal tax support designed to make everything clear, compliant, and affordable.",
    paragraph2:
      "Our expert team takes care of the details, helping you stay organised, meet HMRC requirements, and avoid unnecessary hassle. With straightforward advice and ongoing support, we make managing your finances easy, efficient, and worry-free.",
    image: individuals,
    // introSection
    introSection: {
      heading: "Everything You Need for",
      highlightedSection: "Simple, Stress-Free",
      headingagain: "Tax & Bookkeeping",

      Cards: [
        {
          img: two,
          heading: "Hassle-Free Bookkeeping",
          description:
            "Stop wrestling with spreadsheets. Our expert bookkeepers categorise every income and expense in real time, giving you accurate, tax-ready records all year. Fast, affordable, and 100 % online—so you can focus on growing your business.",
        },
        {
          img: five,
          heading: "Self-Assessment Tax Return",
          description:
            "Need to file your Self-Assessment? Our certified accountants prepare and submit your tax return to HMRC before the 31 January deadline, maximising every allowable expense so you pay only what you owe. 100 % online, fixed-fee, and fully guaranteed—stay compliant without the stress.",
        },
        {
          img: six,
          heading: "Complete Tax Services",
          description:
            "Self-employed, side-hustle, rental property or mix? Our tax accountants track every income stream, claim every relief, and file accurate returns so you stay HMRC-compliant and keep more of what you earn. All online, one flat fee.",
        },
        {
          img: seven,
          heading: "Smart Tax Savings",
          description:
            "Our certified accountants scan your books for every deductible expense, allowance and relief—turning overlooked receipts into real savings. Legally cut your self-assessment tax bill and boost your take-home pay, all backed by our accuracy guarantee.",
        },
        {
          img: eight,
          heading: "24/7 Tax Advice",
          description:
            "Got an HMRC letter, expense query, or tax worry? Message or call our friendly, UK-based accountants anytime for clear, jargon-free answers—guaranteed response within 1 hour, 7 days a week.",
        },
        {
          img: nine,
          heading: "Fixed-Fee Pricing, No Hidden",
          description:
            "Professional bookkeeping & tax support from £29/mo. Get instant quotes, pay one transparent fee, and enjoy unlimited help—no surprises, no upsells, just reliable accounting that fits your budget.",
        },
      ],
    },
    QuizSection: [
      {
        heading: "What are annual accounts, and why do I need them?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "How long does it take to prepare and file annual accounts?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "What are the penalties for missing the annual accounts filing deadline?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Do you offer fixed pricing for annual accounts services?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "Can small businesses benefit from your annual accounts services?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "How can annual accounts help reduce tax liability?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
    whyUsSection: [
      {
        heading: "Why ",
        highlightedHeading: "Choose Online Taxation",
        headingAfter: " | Top-Rated UK Online Accountants",
        paragraph: "",
        paragraphtwo: "",
        img: fourWhyUs,
        pointers: [
          {
            img: Subtract,
            point:
              "Simple, cloud-based bookkeeping—real-time profit & loss at a glance",
          },
          {
            img: Subtract,
            point:
              "100 % on-time Self-Assessment filing; never miss an HMRC deadline",
          },
          {
            img: Subtract,
            point:
              "Personal tax advisor matched to your industry, finding every relief",
          },
          {
            img: Subtract,
            point:
              "Full Making-Tax-Digital & HMRC compliance, audit-proof records",
          },
          {
            img: Subtract,
            point:
              "One flat monthly fee, unlimited support—sleep-easy guarantee",
          },
        ],
        paragraphThree:
          "Join 5,000+ UK freelancers, landlords & small businesses who trust Online Taxation to keep their books accurate, their taxes low, and their minds clear.",
      },
    ],
  },
  //   freelancers
  {
    slug: "freelancers",
    title: "Accountants built for freelancers",
    paragraph1:
      "You master the client briefs, late-night edits and tight turnarounds—leave the numbers to us. Bookkeeping left until 11 pm on deadline day breeds errors, missed expenses and HMRC fines.",
    paragraph2: "Our freelancer-only subscription gives you:",
    pointers: [
      {
        img: Subtract,
        point: "Snap-and-store receipt app that logs expenses in 30 seconds",
      },
      {
        img: Subtract,
        point:
          "Monthly profit statements so you know what to invoice next week",
      },
      {
        img: Subtract,
        point:
          "Tax-saving reminders (home-office, gear, travel) pushed to your inbox",
      },
      {
        img: Subtract,
        point: "One fixed fee—no bolt-ons, no surprise bills",
      },
    ],
    image: freelancers,
    // introSection
    introSection: {
      heading: "Why Choose Us For",
      highlightedSection: "Freelancer Accountancy",
      headingagain: "Services?",
      Cards: [
        {
          img: twenty,
          heading: "Affordable accounting",
          description:
            "Keep more of what you earn: our plans start at pocket-money prices because we know every £1 matters when you're self-employed.",
        },
        {
          img: twentyTwo,
          heading: "Zero-hassle books",
          description:
            "Snap receipts in our app, WhatsApp invoices or email a spreadsheet—your dedicated accountant does the rest. No more midnight bookkeeping marathons.",
        },
        {
          img: twentyFour,
          heading: "Stress-free tax returns",
          description:
            "We build your self-assessment from the figures we already hold, file it months early and tell you exactly what to set aside for HMRC. No January panic, no late fines.",
        },
        {
          img: twentyOne,
          heading: "Tax-efficiency as standard",
          description:
            "From home-office allowances to equipment claims and pension top-ups, we spot every legal deduction so your tax bill shrinks and your take-home grows.",
        },
        {
          img: twentyThree,
          heading: "Scales with your gig",
          description:
            "Side-hustle, six-figure consultancy or anything in-between—upgrade, downgrade or pause your plan whenever work (or life) changes.",
        },
        {
          img: thirteen,
          heading: "Your own freelancer team",
          description:
            "You'll work with the same small group of UK-qualified accountants who understand creative industries, IR35 and the platforms you use. Advice is unlimited and always one email away.",
        },
      ],
    },
    QuizSection: [
      {
        heading: "How Much Do Freelance Accountants Charge?",
        description:
          "Limited company accounting involves several financial duties, including preparing year-end accounts and submitting your business’ expenses and in You don’t have to pay hundreds of pounds a month for a great accountant. Our expert accountants for small businesses and freelancers charge a fixed monthly fee, with no hidden costs. Your exact monthly fee depends on the services you opt for when you get your free quote. If you’ve been a online Taxation customer for a full year, there won’t be an extra charge for your annual accounts.",
      },
      {
        heading: "What Do Freelance Accountants Do?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Do I Need an Accountant as a Freelancer?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Where Can I Find Freelance Accountants?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What Are the Details You’ll Need From Me?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
    whyUsSection: [
      {
        heading: "Why freelancers pick us ",
        highlightedHeading: "(and not a traditional firm)",
        headingAfter: "",
        paragraph:
          "Traditional accountants talk in jargon and bill by the hour. We talk gig economy, side-hustles and late-night invoice panic—because we’ve been there.",
        paragraphtwo:
          "Beyond bookkeeping and tax returns, we give you the practical stuff that actually moves the needle:",
        img: fiveWhyUs,
        pointers: [
          {
            img: Subtract,
            point:
              "Slash your tax bill with IR35-friendly salary/dividend splits, home-office and gear claims",
          },
          {
            img: Subtract,
            point:
              "Step-by-step guide to registering as a sole trader or forming a Ltd co—done in 24 hrs",
          },
          {
            img: Subtract,
            point:
              "Same-day advice on the best challenger bank accounts and how to keep clean digital records",
          },
          {
            img: Subtract,
            point:
              "Real-time “what-if” calculator so you can see net take-home before you pitch that big project",
          },
          {
            img: Subtract,
            point:
              "Expense checklists for your niche (cameras, software, travel, coworking) so nothing is missed",
          },
        ],
        paragraphThree: "",
      },
    ],
    whyUsAgain: [
      {
        heading: "Hand your freelance finances to Online Taxation in one click",
        paragraph:
          "Freelancing gives you freedom over projects, hours and rates—but the numbers side can feel like a second job. Receipts pile up, tax rules shift and MTD for income tax (launching 2026) will soon force every sole trader to keep digital, quarterly records.",
        headingAfter:
          "Stop juggling spreadsheets and guessing tax bills. Our ICAEW-accredited freelancer team will:",
        paragraphTwo:
          "Choose a rolling monthly plan or pause anytime. You send receipts by photo, email or post; we do the bookkeeping, VAT (if registered) and year-end accounts. Sleep easy knowing your tax is right, your records are MTD-ready and your evenings are yours again.",
        pointers: [
          {
            img: SubtractAgain,
            point:
              "Track all income and expenses through cloud software—no need to buy or learn it",
          },
          {
            img: SubtractAgain,
            point:
              "File your self-assessment early, telling you exactly what to save each month",
          },
          {
            img: SubtractAgain,
            point:
              "Claim every allowable cost, from Adobe licences to Zoom calls, cutting your tax bill",
          },
          {
            img: SubtractAgain,
            point:
              "Upgrade your package as you scale from side-hustle to six-figure agency",
          },
        ],
      },
    ],
  },
  //   sole-traders
  {
    slug: "sole-traders",
    title: "Sole Trader Accounting Services",
    paragraph1:
      "Being self-employed is simple—until tax season hits. Our sole-trader accountants track every receipt, claim every allowable expense, and file your Self-Assessment early so you keep more profit and stay HMRC-safe. As your earnings grow we automatically review whether switching to a Limited Company will cut your tax bill, giving you the numbers and advice to decide with confidence. Fixed monthly fee, no tie-in—just smart, growth-ready accounting for UK sole traders.",
    paragraph2: "",
    image: soleTraders,
    // introSection
    introSection: {
      heading: "Why Choose Online Taxation for",
      highlightedSection: "Sole Trader",
      headingagain: "Accounting?",
      Cards: [
        {
          img: one,
          heading: "Dedicated Accountant",
          description:
            "One friendly UK accountant learns your goals—cut tax, boost profit, or free up time—then builds a plan around YOU.",
        },
        {
          img: two,
          heading: "Monthly Books Done for You",
          description:
            "Drop your receipts via app, email, or free purple envelope; we categorise, reconcile and deliver tidy P&L by the 5th of every month.",
        },
        {
          img: three,
          heading: "Self-Assessment Filed",
          description:
            "We prepare and submit your SA100 to HMRC, claiming every allowable expense so you never miss a deadline or pay a penny more than you owe.",
        },
        {
          img: seven,
          heading: "Unlimited Advice",
          description:
            "Phone, WhatsApp or email your accountant anytime—typical reply within 30 minutes, 7 days a week.",
        },
        {
          img: eight,
          heading: "Free Invoicing Software",
          description:
            "Create, send and chase unlimited professional invoices in 30 seconds; automatic payment reminders keep cash-flow healthy.",
        },
        {
          img: nine,
          heading: "Flexible Paperwork",
          description:
            "Snap receipts in our app, forward emails, or pop papers in the post; we handle the rest. Upgrade, downgrade or cancel monthly—no tie-in.",
        },
      ],
    },
    QuizSection: [
      {
        heading: "Do Sole Traders Need Accountants?",
        description:
          "No. Having an accountant isn’t a legal requirement for a self-employed business owner in the UK. But many people find that instead of trying to get to grips with free bookkeeping software or simply winging it come tax season, it’s far better to have an expert with accounting experience who can keep bookkeeping records and submit taxes on their behalf.",
        descriptiontwo:
          "If your financial duties are stopping you from running a successful business, investing in an online accounting service makes sense.",
      },
      {
        heading: "What Accounts Does a Sole Trader Need?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "Why Should I Choose Online Taxation Over a Local Accountancy Firm?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "Why Is Online Taxation Ideal for Small Businesses or Sole Traders?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What Are the Details You’ll Need From Me?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What’s the Advantage of Having an Accountancy Team?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Do You Also Offer a VAT Return?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
    whyUsSection: [
      {
        heading: "What is a Sole Trader? ",
        highlightedHeading: "",
        headingAfter: "",
        img: twoWhyUs,
        paragraph:
          "A sole trader is a self-employed person who owns and runs their entire business. Legally, you and the business are one and the same—there’s no limited-company wrapper between you and your customers.",
        paragraphtwo:
          "As a sole trader there is no legal obligation to run a separate business bank account (although we highly recommend that you do).",
        pointers: [
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
        ],
        paragraphThree:
          "When you run your business as a sole trader you pay your tax based on the net profit that your business makes. Drawings that you take from the business are not taxed like they would be if you paid a salary. Likewise, your drawings are not a tax deductible expense!",
      },
    ],
    whyUsSectionTwo: [
      {
        heading: "Setting up as a Sole Trader",
        highlightedHeading: "",
        headingAfter: "",
        paragraph:
          "Setting up as a sole trader really is the quickest way to turn your idea into income. Tell HMRC you’re self-employed as soon as you decide to trade—even though the legal deadline is 5 October after the end of the tax year in which you receive your first sale. Early registration protects you from late-filing penalties and gives you time to budget for your first tax bill.",
        paragraphtwo:
          "The process is one online form: register for Self Assessment as a sole trader. Within about ten days HMRC posts your 10-digit Unique Taxpayer Reference (UTR). Guard this number—you’ll need it on every letter, phone call and, most importantly, on your annual tax return.",
        img: whyUstwo,
        pointers: [
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
        ],
        paragraphThree:
          "Once the UTR lands, you’re officially open for business. No company incorporation, no share certificates, no long waits—just invoice customers and start earning.",
      },
    ],
    whyUsAgain: [
      {
        heading:
          "Stress-Free Sole-Trader Accounting Online | File SA100, MTD-Ready From £29·99",
        paragraph:
          "Swap payslips for unpredictable income? Freedom feels great—until the receipts pile up. Online Taxation gives sole traders an all-in-one, cloud-based accounting service that tracks every up-and-down pound so you don’t have to.",
        headingAfter: "",
        paragraphTwo:
          "You reclaim 8–10 hours a month, avoid £1,000s in missed expenses, and never chase another receipt.",
        pointers: [
          {
            img: SubtractAgain,
            point:
              "Bookkeeping done for you – snap receipts in our app or post them free; we categorise every expense and match it to your bank feed.",
          },
          {
            img: SubtractAgain,
            point:
              "Live cash-flow dashboard – see profit, tax owed and available dividends in real time, 24/7.",
          },
          {
            img: SubtractAgain,
            point:
              "Self-Assessment filed & paid – we prepare your SA100, calculate Income Tax + National Insurance and submit to HMRC before 31 Jan; you just approve.",
          },
          {
            img: SubtractAgain,
            point:
              "MTD-ready software – compliant for Making Tax Digital phase-ins; no surprise switch-over costs.",
          },
          {
            img: SubtractAgain,
            point:
              "Monthly P&L + tax forecasts – know exactly how much to set aside for tax, when to invest, or if VAT registration will save money.",
          },
          {
            img: SubtractAgain,
            point:
              "Unlimited accountant contact – WhatsApp, email or call your dedicated UK accountant, average reply 23 minutes.",
          },
        ],
      },
    ],
    advanDisvantages: {
      advantages: [
        {
          heading: "The Advantages",
          pointers: [
            {
              img: SubtractAgain,
              heading: "",
              point:
                "The big win with sole-trader status is speed: one HMRC registration, pick a name, and you’re trading. You skip the red tape that limited companies face—no annual accounts at Companies House, no confirmation statements, no board meetings or director appointments.",
            },
            {
              img: SubtractAgain,
              heading: "",
              point:
                "Record-keeping is still required, but it’s light-touch. Log every sale and expense in a digital format (Excel, cloud software or our app) and you’re ready for Making Tax Digital when it reaches sole traders. Hand the files to us and we’ll file your Self Assessment, leaving you free to focus on customers.",
            },
            {
              img: SubtractAgain,
              heading: "",
              point:
                "Privacy is another plus. Limited companies publish accounts, director details and registered-office addresses on the public register; sole traders only report to HMRC, so your figures stay between you, your accountant and the taxman.",
            },
          ],
        },
      ],
      disadvantages: [
        {
          heading: "The Disadvantages",
          pointers: [
            {
              img: SubtractAgain,
              heading: "",
              point:
                "The downside of sole-trader simplicity is personal exposure. Because the law sees you and your business as one entity, every business debt, supplier dispute or legal claim lands squarely on your personal finances and assets. If cash runs out, creditors can pursue your savings, car or even your home.",
            },
            {
              img: SubtractAgain,
              heading: "",
              point:
                "Tax can also sting once profits climb. Income Tax and National Insurance rates for individuals often exceed the combined corporation-tax and dividend-tax bill a small limited company pays, so higher earners can lose thousands each year. Ask an accountant to run the numbers—switching structure later is common.",
            },
            {
              img: SubtractAgain,
              heading: "",
              point:
                "Tax can also sting once profits climb. Income Tax and National Insurance rates for individuals often exceed the combined corporation-tax and dividend-tax bill a small limited company pays, so higher earners can lose thousands each year. Ask an accountant to run the numbers—switching structure later is common.",
            },
          ],
        },
      ],
    },
  },
  //   small-businesses
  {
    slug: "small-businesses",
    title: "Support for Small Businesses",
    paragraph1:
      "Small businesses need reliable accounting partners. At Online Taxation, we provide comprehensive services from bookkeeping to payroll, VAT returns to management accounts, helping your business grow and succeed.",
    paragraph2:
      "Our experienced team delivers practical financial advice and ongoing support tailored to your business needs. We help you make informed decisions, stay compliant, and achieve your business goals.",
    image: smallBusinesses,
    // introSection
    introSection: {
      heading: "Why Choose us For Your",
      highlightedSection: "Small Business",
      headingagain: "Accounting?",
      Cards: [
        {
          img: thirteen,
          heading: "Your own dedicated finance team",
          description:
            "From day one you're paired with a small, UK-qualified accountancy team who learn your goals and spot savings long before year-end. All emails, calls and advice are covered in one predictable monthly fee.",
        },
        {
          img: twentySeven,
          heading: "Tech that works behind",
          description:
            "We run award-winning bookkeeping software so you don't have to. Snap receipts on your phone, WhatsApp invoices or forward bank statements—your accountants handle the rest and your dashboard stays live 24/7.",
        },
        {
          img: twentyNine,
          heading: "Fixed, fair pricing",
          description:
            'Choose the plan that matches your turnover and service level. Every cost is shown upfront; there are no bolt-ons, year-end surprises or "extra filing" fees.',
        },
        {
          img: twentySix,
          heading: "15 years of start-up",
          description:
            "We've looked after cafés, consultancies, Etsy sellers and SaaS founders since 2008. Whatever your niche, we've already solved the tax quirks you're about to face.",
        },
        {
          img: twentyEight,
          heading: "Zero hassle, zero spreadsheets",
          description:
            "We prepare VAT returns, payroll, corporation tax and confirmation statements while you chase sales. Log in once a month to see profit, dividends and tax due—then get back to running your business.",
        },
        {
          img: thirty,
          heading: "MTD-ready today",
          description:
            "Making Tax Digital for ITSA and corporation tax is coming. Our systems are already API-linked to HMRC, so your digital records stay compliant and penalty-proof without you lifting a finger.",
        },
      ],
    },
    QuizSection: [
      {
        heading: "What accounting services do small businesses need?",
        description:
          "At the very least, we would recommend that you find an accounting solution that can manage your monthly bookkeeping, helping you file and record your income and expenses. We would also strongly recommend working with an accounting company that can submit your tax returns to HMRC and/or Companies House.",
      },
      {
        heading:
          "How much should a small business pay for accounting services?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "What types of small businesses does Online Taxation work with?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Is there a minimum contract period?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "If I leave Online Taxation mid-way through the year, will I be entitled to a refund?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading:
          "What happens if I get started with Mazuma part-way through the financial year?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What if I need to switch accountants?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
    whyUsSection: [
      {
        heading: "Work With Us for Small Business Accounting",
        highlightedHeading: "",
        headingAfter: "",
        img: threeWhyUs,
        paragraph:
          "Starting a small business is an exciting milestone, but managing accounts and tax can quickly take time away from doing what you love. At online Taxation, we provide affordable, expert small business accounting services that take the pressure off. Our qualified accountants handle your bookkeeping, tax, and compliance, so you can focus on growing your business with confidence.",
        paragraphtwo:
          "We keep you up to date with changing regulations, including Making Tax Digital, and manage everything when tax deadlines arrive. You’ll also receive clear monthly reports and tax efficiency insights designed to help reduce your tax bill and improve cash flow. With competitive pricing and friendly expert support, we make small business accounting simple and stress-free.",
        pointers: [
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
          {
            img: null,
            point: "",
          },
        ],
        paragraphThree: "",
      },
    ],
    howItWorksSection: [
      {
        heading: "How it works—three steps, zero stress",
        sections: [
          {
            heading: "Send us the paperwork",
            description:
              "Upload PDFs, snap photos in our app or pop receipts in the post (freepost envelope provided). That’s it—no data entry, no software learning curve.",
          },
          {
            heading: "We do the heavy lifting",
            description:
              "Your dedicated small-business accountant handles bookkeeping, bank recs, VAT, payroll and monthly management accounts. You receive a clear profit snapshot and dividend-safe figure every month.",
          },
          {
            heading: "Year-end handled",
            description:
              "We prepare and file your self-assessment, corporation-tax return and confirmation statement with HMRC and Companies House—approved by you, submitted early, penalties avoided.",
          },
        ],
      },
    ],
    whatWeDoSection: [
      {
        heading: "Small Business Accounting Services",
        description:
          "We offer a wide range of services that are designed to help small businesses with their finances, including:",
        sections: [
          {
            img: wwdtwo,
            heading: "Managed Bookkeeping",
            description:
              "Our managed online bookkeeping service keeps your accounts accurate and up to date every month. Our expert accountants handle the details for you, providing clear monthly reports and practical insights to support your business growth.",
          },
          {
            img: wwdthree,
            heading: "Invoicing Software",
            description:
              "Create, send, and track invoices with ease using our automated invoicing software. Included free with all Online Taxation accounting services, our simple platform lets you invoice clients at the click of a button and stay on top of payments effortlessly.",
          },
          {
            img: wwdone,
            heading: "Free Advice",
            description:
              "We provide ongoing support and guidance, working closely with you to answer questions, offer advice, and help your business make the most of its finances every step of the way.",
          },
        ],
      },
    ],
  },
  //   limited-company
  {
    slug: "limited-company",
    title: "Limited Company Accounts",
    paragraph1:
      "Incorporating opens the door to lower tax, limited liability and bigger contracts—but it also brings statutory accounts, corporation-tax returns and payroll filings that can swallow your evenings.",
    paragraph2:
      "If the extra paperwork is stealing time from sales and strategy, Mazuma’s all-in-one Limited Company Accounts service steps in. We prepare and submit your annual accounts, CT600, confirmation statement, director payroll and VAT—all for one fixed monthly fee, with no hidden extras. Stay compliant, keep more profit, and get your evenings back.",
    image: limitedCompany,
    // introSection
    introSection: {
      heading: "Why Choose Online Taxation for  ",
      highlightedSection: "Sole Trader",
      headingagain: "Accounting?",
      Cards: [
        {
          img: ten,
          heading: "Accountancy Package ",
          description:
            "Whether you’re a one-director consultancy or a multi-employee scale-up, we have a plan—and a price—tailored to your sector, size and ambition.",
        },
        {
          img: eleven,
          heading: "MTD-ready technology",
          description:
            "Making Tax Digital for corporation tax is on the horizon. We run every client on award-winning cloud software so you’re compliant years before the mandate hits and filings are 100% digital.",
        },
        {
          img: thirteen,
          heading: "Dedicated Accountancy Team",
          description:
            "From day one you’ll work with the same small group of qualified accountants who already support businesses like yours. They learn your goals, spot tax savings early and answer questions in plain English.",
        },
        {
          img: twentyFive,
          heading: "Pick and mix cover",
          description:
            "Need a company set-up, quarterly management accounts, R&D claims, payroll, VAT or just year-end filings? Choose only the modules you want and scale the bundle up or down as you grow.",
        },
        {
          img: twelve,
          heading: "Truly unlimited contact",
          description:
            "Phone, email or video—chat with your accountant as often as you need, with no meter running. Quick query or big-picture strategy, we’re here the same day.",
        },
        {
          img: fourteen,
          heading: "Hand over the heavy lifting",
          description:
            "Send us your monthly bank feed or a simple spreadsheet of income and expenses. We’ll reconcile, file the accounts, run payroll, pay HMRC and tell you what you can take home. You stay in control without doing the grunt work.",
        },
      ],
    },
    QuizSection: [
      {
        heading: "What Is Limited Company Accounting?",
        description:
          "Limited company accounting involves several financial duties, including preparing year-end accounts and submitting your business’ expenses and income to Companies House to assess your tax position.",
        descriptiontwo:
          "The day-to-day responsibilities of limited company accounting include:",
        points: [
          "Documenting payments made and received by your business",
          "Gathering receipts",
        ],
      },
      {
        heading: "What Does an Accountant Do for a Limited Company?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Can Accountants Set Up Limited Companies?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Do You Have to Pay an Accountant for a Limited Company?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What Is the VAT Deadline for Submitting My Return Online?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "What if I Get a VAT Inspection?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Why Should I Choose us Instead of a Local Accountancy Firm?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
    whyUsSection: [
      {
        heading: "What is a Limited Company?",
        highlightedHeading: "",
        headingAfter: "",
        paragraph:
          "A limited company is a separate legal “person” from you. You put in as little as £1 for a share, and that pound is the limit of your personal liability if things go wrong—your house and savings stay protected.",
        paragraphtwo:
          "This limited-liability shield is the key reason freelancers, contractors and growing businesses trade through a company instead of as a sole trader.",
        img: oneWhyUs,
        pointers: [
          {
            img: Subtract,
            point:
              "file audited or abbreviated accounts and a confirmation statement at Companies House (public record)",
          },
          {
            img: Subtract,
            point: "send a corporation-tax return and full accounts to HMRC",
          },
          {
            img: Subtract,
            point:
              "keep digital, MTD-ready records of every invoice, receipt and expense",
          },
        ],
        paragraphThree: "",
      },
    ],
    whyUsSectionTwo: [
      {
        heading: "Who should trade through a Limited Company?",
        highlightedHeading: "",
        headingAfter: "",
        paragraph:
          "There’s no turnover threshold—everyone from one-person freelancers to micro start-ups can trade through a company. You don’t need to be VAT-registered either; register only when turnover (or choice) dictates.",
        paragraphtwo: "Three groups that gain the most:",
        img: whyUsone,
        pointers: [
          {
            img: Subtract,
            point:
              "Freelancers & contractors who want limited-liability protection and professional credibility",
          },
          {
            img: Subtract,
            point:
              "Side-hustle owners looking to shelter profits above the higher-rate tax band.",
          },
          {
            img: Subtract,
            point:
              "New businesses pitching to larger clients or agencies that prefer to contract with a “Ltd” for compliance and insurance reasons.",
          },
        ],
        paragraphThree:
          "Once the UTR lands, you’re officially open for business. No company incorporation, no share certificates, no long waits—just invoice customers and start earning.",
      },
    ],
    howItWorksSection: [
      {
        heading: "Flexible, fixed-fee accounting for every UK limited company",
        sections: [
          {
            heading: "Flexible, fixed-fee accounting",
            description:
              "From garage-startup to national group, we give you back billable hours while cutting your tax bill. Tell us what you need—full statutory accounts, payroll, VAT, R&D claims or just year-end filings—and we’ll email a no-obligation quote the same day.",
          },
          {
            heading: "No software headaches",
            description:
              "Your dedicated accountant logs into our award-winning cloud platform for you, submits MTD-compliant returns and keeps the books up to date. You never have to learn a single ledger.",
          },
          {
            heading: "Send paperwork your way",
            description:
              "Post your receipts for free, email a spreadsheet or snap photos in our MazApp—whichever fits your routine. We reconcile everything behind the scenes and update a live profit dashboard you can check 24/7.",
          },
          {
            heading: "Flexible, fixed-fee accounting",
            description:
              "Think of it as a virtual payslip: each month you’ll see revenue, allowable expenses and exactly what you can safely withdraw as dividends, keeping your company tax-efficient and your personal tax code happy.",
          },
        ],
      },
    ],
    advanDisvantages: {
      advantages: [
        {
          heading: "Top 3 benefits of running a limited company",
          pointers: [
            {
              img: SubtractAgain,
              heading: "Limited liability:",
              point:
                "If the business folds or faces a legal claim, only the company’s assets are at risk—your personal savings, car and home stay protected.",
            },
            {
              img: SubtractAgain,
              heading: "Tax-smart profit extraction:",
              point:
                "Pay yourself a modest salary plus dividends; combined rates are still lower than high-rate Income Tax and National Insurance for sole traders, leaving more cash in your pocket.",
            },
            {
              img: SubtractAgain,
              heading: "Exclusive name protection:",
              point:
                "Once your chosen name is registered at Companies House, no other UK business can use or register an identical one, giving you instant brand security and professional kudos.",
            },
          ],
        },
      ],
      disadvantages: [
        {
          heading: "The Disadvantages",
          pointers: [
            {
              img: SubtractAgain,
              heading: "More red tape:",
              point:
                "A limited company must file annual accounts, a confirmation statement and a corporation-tax return—each with strict deadlines and formats. Miss one and penalties start at £150 and climb fast.",
            },
            {
              img: SubtractAgain,
              heading: "Higher accountancy costs:",
              point:
                "Because of the extra filings, professional fees are typically 50–100 % more than for a sole trader. Build this into your budget, but remember the tax savings usually outweigh the bill.",
            },
            {
              img: SubtractAgain,
              heading: "No privacy:",
              point:
                "Your company’s accounts, director names and registered address are published on the public record at Companies House—visible to suppliers, competitors and credit-check agencies.",
            },
          ],
        },
      ],
    },
  },
  //   contractors
  {
    slug: "contractors",
    title: "Contractors Accounting & Tax Filing Services",
    paragraph1:
      "Alright, fellow contractor! Fancy a cuppa while we chat finances? We understand that you're a whizz at what you do – smashing deadlines, building empires (well, one happy client at a time), and revelling in the freedom of being your own boss, but when it comes to the murky world of tax and accounting, things can get rough, mate.",
    paragraph2:
      "Here at Online Taxation, we're a bunch of friendly (and dare we say, competent) accountants with years of experience in helping contractors. You need to sit back and relax now as we know how to find our way around in the IR35 jungle. So let us help you stay tax-efficient and be victorious.",
    image: contractorsAccounting,
    // introSection
    introSection: {
      heading: "Top Reasons to Select Our",
      highlightedSection: "Contractor Accountancy",
      headingagain: "Service",
      Cards: [
        {
          img: thirtyOne,
          heading: "Your Personal Accountant",
          description:
            "No robots here—just a dedicated accountant who understands the ups and downs of freelancing. You'll get personalised advice tailored specifically to your situation.",
        },
        {
          img: thirtyTwo,
          heading: "Limited Company Experts",
          description:
            "Setting up and running a limited company can be tricky, but we'll guide you through it. From bookkeeping to tax filing, we make sure everything's done right so you can maximise your financial gain.",
        },
        {
          img: thirtyThree,
          heading: "Tax Efficiency",
          description:
            "We don't just file your taxes—we help you plan them. Our experts find every allowable deduction to keep more of your hard-earned money in your pocket.",
        },
        {
          img: twentyOne,
          heading: "Free Up Your Time",
          description:
            "Leave the number-crunching to us. We handle all your accounting and tax needs efficiently, so you can focus on growing your freelance business.",
        },
        {
          img: twentyThree,
          heading: "Transparent Pricing",
          description:
            "Our fixed-fee packages are clear and competitive. No hidden costs, just expert support at a fair price.",
        },
        {
          img: thirtyFour,
          heading: "IR35 Made Simple",
          description:
            "We'll assess your status and guide you through off-payroll rules, keeping you fully compliant and free from HMRC surprises.",
        },
      ],
    },
    QuizSection: [
      {
        heading:
          "I'm really not sure if this service is for me, it just seems so different!",
        description:
          "We do understand that we're not a traditional accountancy firm and that our multi award-winning re-vamped way of working might not be everyone's cup of tea.  We think that most small businesses could benefit from a bit of Mazuma magic, but take a look at the reasons why we may not be right for you before you make a final decision! To make it easy we also explain how you can switch to us",
      },
      {
        heading: "What Do Freelance Accountants Do?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Why is your Accounting Service so cheap?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Will I always deal with the same staff members?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
      {
        heading: "Will I be able to speak to my Accountant whenever I want to?",
        description:
          "Annual accounts are a legal requirement for UK companies, detailing financial performance. They must be submitted to HMRC and Companies House for compliance.",
      },
    ],
  },
];

export default Data;
