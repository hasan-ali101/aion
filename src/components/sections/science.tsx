import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

export const Science = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-center text-white">
        The Science
        <span className="text-secondary">
          <br />
          Behind the substance
        </span>
      </h2>
      <div className="flex w-full max-w-section flex-col md:flex-row md:gap-6">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col md:w-1/2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Clinical trials & studies</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.cambridge.org/core/journals/bjpsych-open/article/ketamine-for-the-treatment-of-mental-health-and-substance-use-disorders-comprehensive-systematic-review/36E261BFA62CDA6459B88F7777415FDA" target="_blank" rel="noopener noreferrer">2022 systematic review of 83 trials.</a> <br/>
              Walsh, Zach, et al. “Ketamine for the treatment of mental health and substance use disorders: comprehensive systematic review.” BJPsych Open 8.1 (2022). <br/> <br/>

              <a href="https://link.springer.com/article/10.1007/s43440-021-00232-4" target="_blank" rel="noopener noreferrer">2021 review of neurobiological mechanisms</a>. <br/>
              Kohtala, Samuel. “Ketamine—50 years in use: from anesthesia to rapid antidepressant effects and neurobiological mechanisms.” Pharmacological Reports (2021): 1-23. <br/> <br/>

              <a href="https://www.mdpi.com/1424-8247/13/7/151" target="_blank" rel="noopener noreferrer">2020 safety review of 6630 patients. </a> <br/>
              Feifel, David, David Dadiomov, and Kelly C Lee. “Safety of repeated administration of parenteral ketamine for depression.” Pharmaceuticals 13.7 (2020): 151. <br/> <br/>
              
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0165032717322541" target="_blank" rel="noopener noreferrer">2018 blood pressure safety review. </a> <br/>
              Riva-Posse, Patricio, et al. “Blood pressure safety of subanesthetic ketamine for depression: a report on 684 infusions.” Journal of affective disorders 236 (2018): 291-297. <br/> <br/>
              
              <a href="https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(17)30102-5/abstract" target="_blank" rel="noopener noreferrer">2017 review on ethics and safety. </a> <br/>
              Singh, I., Morgan, C., Curran, V., Nutt, D., Schlag, A., & McShane, R. (2017). Ketamine treatment for depression: opportunities for clinical innovation and ethical foresight. The Lancet Psychiatry, 4(5), 419-426. <br/> <br/>

              <a href="https://www.cambridge.org/core/journals/psychological-medicine/article/singledose-infusion-ketamine-and-nonketamine-nmethyldaspartate-receptor-antagonists-for-unipolar-and-bipolar-depression-a-metaanalysis-of-efficacy-safety-and-time-trajectories/FDBFA2C640F5662E0D2E67D7CCD28269" target="_blank" rel="noopener noreferrer">2016 safety and efficacy review. </a> <br/>
              Kishimoto, T., et al. “Single-dose infusion ketamine and non-ketamine N-methyl-d-aspartate receptor antagonists for unipolar and bipolar depression: a meta-analysis of efficacy, safety and time trajectories.” Psychological medicine 46.7 (2016): 1459-1472. <br/> <br/>

              <a href="https://www.psychiatrist.com/jcp/depression/ketamine-safety-tolerability-clinical-trials-treatment/" target="_blank" rel="noopener noreferrer">2014 safety review. </a> <br/>
              Wan, Le-Ben, et al. “Ketamine safety and tolerability in clinical trials for treatment-resistant depression.” The Journal of clinical psychiatry 76.3 (2014): 0-0. <br/> <br/>
              
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S000632230901097X" target="_blank" rel="noopener noreferrer">2010 safety review. </a> <br/>
              Aan Het Rot, Marije, et al. “Safety and efficacy of repeated-dose intravenous ketamine for treatment-resistant depression.” Biological psychiatry 67.2 (2010): 139-145. <br/> <br/> {" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ketamine-Assisted Therapy
            </AccordionTrigger>
            <AccordionContent>
              <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2022.868103/full?field=&id=868103&journalName=Frontiers_in_Psychology" target="_blank" rel="noopener noreferrer">2022 on combining ACT therapy with ketamine. </a> <br/>
              Mathai, D. S., Mora, V., & Garcia-Romeu, A. (2022). Toward Synergies of Ketamine and Psychotherapy. Frontiers in Psychology, 1203.
              <br/> <br/>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9207256/" target="_blank" rel="noopener noreferrer">2022 systematic narrative review of ketamine-assisted psychotherapy. </a> <br/>
              Drozdz, S. J., Goel, A., McGarr, M. W., Katz, J., Ritvo, P., Mattina, G. F., … & Ladha, K. S. (2022). Ketamine Assisted Psychotherapy: A Systematic Narrative Review of the Literature. Journal of Pain Research, 15, 1691.
              <br/> <br/>
              <a href="https://europepmc.org/article/med/35012326" target="_blank" rel="noopener noreferrer">2022 therapy augments effects of ketamine for alcohol use disorder. </a> <br/>
              Grabski, M., McAndrew, A., Lawn, W., Marsh, B., Raymen, L., Stevens, T., … & Morgan, C. J. A. (2022). Adjunctive Ketamine With Relapse Prevention-Based Psychological Therapy in the Treatment of Alcohol Use Disorder. The American Journal of Psychiatry, appiajp202121030277-appiajp202121030277.
              <br/> <br/>
              <a href="https://www.mdpi.com/2624-8611/4/1/12" target="_blank" rel="noopener noreferrer">2022 optimizing ketamine treatment with trauma-informed psychotherapy. </a> <br/>
              Muscat, S. A., Hartelius, G., Crouch, C. R., & Morin, K. W. (2022). Optimized Clinical Strategies for Treatment-Resistant Depression: Integrating Ketamine Protocols with Trauma-and Attachment-Informed Psychotherapy. Psych, 4(1), 119-141.
              <br/> <br/>
              <a href="https://www.karger.com/Article/Abstract/517074" target="_blank" rel="noopener noreferrer">2021 therapy enhances durability of treatment effect. </a> <br/>
              Wilkinson, Samuel T., et al. “Cognitive behavioral therapy to sustain the antidepressant effects of ketamine in treatment-resistant depression: a randomized clinical trial.” Psychotherapy and psychosomatics 90.5 (2021): 318-327.
              <br/> <br/>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/17512433.2020.1772054" target="_blank" rel="noopener noreferrer">2020 review of therapeutic mechanisms to augment effect. </a> <br/>
              Greenway, Kyle T., et al. “Integrating psychotherapy and psychopharmacology: psychedelic-assisted psychotherapy and other combined treatments.” Expert Review of Clinical Pharmacology 13.6 (2020): 655-670.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2019.19121242" target="_blank" rel="noopener noreferrer">2020 editorial on Motivational Enhancement Therapy to augment effect. </a> <br/>
              Mathew, Sanjay J., and Rebecca B. Price. “Ketamine Plus Motivational Enhancement Therapy: Leveraging a Rapid Effect to Promote Enduring Change.” American Journal of Psychiatry 177.2 (2020): 107-109.
              <br/> <br/>
              <a href="https://www.cambridge.org/core/journals/cns-spectrums/article/toward-specific-ways-to-combine-ketamine-and-psychotherapy-in-treating-depression/E9A21495A721D7838DC76AAD8BDC87BA" target="_blank" rel="noopener noreferrer">2020 review of psychotherapeutic mechanisms to augment effect. </a> <br/>
              Hasler, Gregor. “Toward specific ways to combine ketamine and psychotherapy in treating depression.” CNS spectrums 25.3 (2020): 445-447.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2019.19070684" target="_blank" rel="noopener noreferrer">2020 ketamine combined with motivational enhancement therapy for alcohol use disorder. </a> <br/>
              Dakwar, Elias, et al. “A single ketamine infusion combined with motivational enhancement therapy for alcohol use disorder: a randomized midazolam-controlled pilot trial.” American Journal of Psychiatry 177.2 (2020): 125-133.
              <br/> <br/>
              <a href="https://www.tandfonline.com/doi/full/10.1080/02791072.2019.1587556" target="_blank" rel="noopener noreferrer">2019 data from KAP clinics. </a> <br/>
              Dore, Jennifer, et al. “Ketamine assisted psychotherapy (KAP): patient demographics, clinical data and outcomes in three large practices administering ketamine with psychotherapy.” Journal of psychoactive drugs 51.2 (2019): 189-198.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2019.18101123" target="_blank" rel="noopener noreferrer">2019 mindfulness-based therapy enhances positive effects with cocaine dependence. </a> <br/>
              Dakwar, Elias, et al. “A single ketamine infusion combined with mindfulness-based behavioral modification to treat cocaine dependence: a randomized clinical trial.” American Journal of Psychiatry 176.11 (2019): 923-930. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Ketamine as a treatment for depression 
            </AccordionTrigger>
            <AccordionContent>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/09540261.2020.1854194" target="_blank" rel="noopener noreferrer">2021 narrative review of ketamine for depression. </a> <br/>
              Jelen, Luke A., and James M. Stone. “Ketamine for depression.” International Review of Psychiatry 33.3 (2021): 207-228.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/abs/10.1176/appi.ajp.2020.20081251" target="_blank" rel="noopener noreferrer">2021 international expert opinion. </a> <br/>
              McIntyre, Roger S., et al. “Synthesizing the evidence for ketamine and esketamine in treatment-resistant depression: an international expert opinion on the available evidence and implementation.” American Journal of Psychiatry 178.5 (2021): 383-399. 
              <br/> <br/>
              <a href="https://www.cambridge.org/core/journals/bjpsych-open/article/ketamine-for-the-treatment-of-mental-health-and-substance-use-disorders-comprehensive-systematic-review/36E261BFA62CDA6459B88F7777415FDA" target="_blank" rel="noopener noreferrer">2021 systematic review of 83 trials. </a> <br/>
              Walsh, Zach, et al. “Ketamine for the treatment of mental health and substance use disorders: comprehensive systematic review.” BJPsych Open 8.1 (2022).
              <br/> <br/>
              <a href="https://journals.sagepub.com/doi/abs/10.1177/0706743720970860" target="_blank" rel="noopener noreferrer">2021 Canadian task force recommendations. </a> <br/>
              Swainson, Jennifer, et al. “The Canadian Network for Mood and Anxiety Treatments (CANMAT) task force recommendations for the use of racemic ketamine in adults with major depressive disorder: Recommandations du groupe de travail du réseau canadien pour les traitements de l’humeur et de l’anxiété (canmat) concernant l’utilisation de la kétamine racémique chez les adultes souffrant de trouble dépressif majeur.” The Canadian Journal of Psychiatry 66.2 (2021): 113-125. 
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S016503272032766X" target="_blank" rel="noopener noreferrer">2021 systematic review and meta-analysis. </a> <br/>
              Bahji, Anees, Gustavo H. Vazquez, and Carlos A. Zarate Jr. “Comparative efficacy of racemic ketamine and esketamine for depression: a systematic review and meta-analysis.” Journal of affective disorders 278 (2021): 542-555. 
              <br/> <br/>
              <a href="https://tidsskriftet.no/en/2021/10/perspectives/ketamine-depression-evidence-and-proposals-practice" target="_blank" rel="noopener noreferrer">2021 brief summary review in the Journal of the Norwegian Medical Association. </a> <br/>
              Kvam, T. M., Stewart, L. H., Blomkvist, A. W., & Andreassen, O. A. (2021). Ketamine for depression–evidence and proposals for practice. Tidsskrift for Den norske legeforening. 
              <br/> <br/>
              <a href="https://pubmed.ncbi.nlm.nih.gov/30844397/" target="_blank" rel="noopener noreferrer">2019 review. </a> <br/>
              Krystal, John H., et al. “Ketamine: a paradigm shift for depression research and treatment.” Neuron 101.5 (2019): 774-778. 
              <br/> <br/>
              <a href="https://www.karger.com/Article/Abstract/457960" target="_blank" rel="noopener noreferrer">2017 CBT plus ketamine for depression. </a> <br/>
              Wilkinson, Samuel T., et al. “Cognitive behavior therapy may sustain antidepressant effects of intravenous ketamine in treatment-resistant depression.” Psychotherapy and psychosomatics 86.3 (2017): 162-167.
              <br/> <br/>
              <a href="https://jamanetwork.com/journals/jamapsychiatry/article-abstract/2605202" target="_blank" rel="noopener noreferrer">2017 consensus from the American Psychiatric Association. </a> <br/>
              Sanacora, Gerard, et al. “A consensus statement on the use of ketamine in the treatment of mood disorders.” JAMA psychiatry 74.4 (2017): 399-405.
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006322312005574" target="_blank" rel="noopener noreferrer">2013 trial demonstrating increased durability by repeat treatments. </a> <br/>
              Murrough, James W., et al. “Rapid and longer-term antidepressant effects of repeated ketamine infusions in treatment-resistant major depression.” Biological psychiatry 74.4 (2013): 250-256. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ketamine as a treatment for suicidal thoughts</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.sciencedirect.com/science/article/pii/S0091743521001080" target="_blank" rel="noopener noreferrer">2021 systematic review. </a> <br/>
              Hochschild, Annabella, Michael F. Grunebaum, and J. John Mann. “The rapid anti-suicidal ideation effect of ketamine: a systematic review.” Preventive medicine 152 (2021): 106524.
              <br/> <br/>
              <a href="https://journals.sagepub.com/doi/full/10.1177/0004867419883341" target="_blank" rel="noopener noreferrer">2020 systematic review and meta-analysis. </a> <br/>
              Witt, Katrina, et al. “Ketamine for suicidal ideation in adults with psychiatric disorders: A systematic review and meta-analysis of treatment trials.” Australian & New Zealand Journal of Psychiatry 54.1 (2020): 29-45.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2017.17040472" target="_blank" rel="noopener noreferrer">2018 systematic review and meta-analysis. </a> <br/>
              Wilkinson, Samuel T., et al. “The effect of a single dose of intravenous ketamine on suicidal ideation: a systematic review and individual participant data meta-analysis.” American journal of psychiatry 175.2 (2018): 150-158.
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2017.17060647" target="_blank" rel="noopener noreferrer">2018 large RCT. </a> <br/>
              Grunebaum, Michael F., et al. “Ketamine for rapid reduction of suicidal thoughts in major depression: a midazolam-controlled randomized clinical trial.” American Journal of Psychiatry 175.4 (2018): 327-335.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ketamine as a treatment for drug addictions</AccordionTrigger>
            <AccordionContent>
              <a href="https://ajp.psychiatryonline.org/doi/10.1176/appi.ajp.2021.21030277" target="_blank" rel="noopener noreferrer">2022 KARE study for alcohol use disorder. </a> <br/>
              Grabski, M., et al. “Adjunctive Ketamine With Relapse Prevention-Based Psychological Therapy in the Treatment of Alcohol Use Disorder.” The American Journal of Psychiatry (2022)
              <br/> <br/>
              <a href="https://www.cambridge.org/core/journals/bjpsych-open/article/ketamine-for-the-treatment-of-mental-health-and-substance-use-disorders-comprehensive-systematic-review/36E261BFA62CDA6459B88F7777415FDA" target="_blank" rel="noopener noreferrer">2022 systematic review of 83 trials. </a> <br/>
              Walsh, Zach, et al. “Ketamine for the treatment of mental health and substance use disorders: comprehensive systematic review.” BJPsych Open 8.1 (2022).
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0149763421002086" target="_blank" rel="noopener noreferrer">2021 review for alcohol use disorder. </a> <br/>
              Worrell, Stephen D., and Thomas J. Gould. “Therapeutic Potential of Ketamine for Alcohol Use Disorder.” Neuroscience & Biobehavioral Reviews (2021). 
              <br/> <br/>
              <a href="https://www.mdpi.com/2076-3425/11/7/856" target="_blank" rel="noopener noreferrer">2021 review for addiction, OCD and eating disorders. </a> <br/>
              Martinotti, Giovanni, et al. “Therapeutic Potentials of Ketamine and Esketamine in Obsessive–Compulsive Disorder (OCD), Substance Use Disorders (SUD) and Eating Disorders (ED): A Review of the Current Literature.” Brain Sciences 11.7 (2021): 856.
              <br/> <br/>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/00952990.2020.1808982" target="_blank" rel="noopener noreferrer">2021 ketamine for cannabis use disorder. </a> <br/>
              Azhari, Nour, et al. “Ketamine-facilitated behavioral treatment for cannabis use disorder: a proof of concept study.” The American journal of drug and alcohol abuse 47.1 (2021): 92-97.
              <br/> <br/>
              <a href="https://www.frontiersin.org/articles/10.3389/fnbeh.2020.593860/full" target="_blank" rel="noopener noreferrer">2020 mechanisms for ketamine for alcohol use disorder. </a> <br/>
              Strong, Caroline E., and Mohamed Kabbaj. “Neural Mechanisms Underlying the Rewarding and Therapeutic Effects of Ketamine as a Treatment for Alcohol Use Disorder.” Frontiers in Behavioral Neuroscience 14 (2020): 225. 
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2019.19070684" target="_blank" rel="noopener noreferrer">2020 ketamine plus motivational therapy for alcohol use disorder. </a> <br/>
              Dakwar, Elias, et al. “A single ketamine infusion combined with motivational enhancement therapy for alcohol use disorder: a randomized midazolam-controlled pilot trial.” American Journal of Psychiatry 177.2 (2020): 125-133. 
              <br/> <br/>
              <a href="https://ajp.psychiatryonline.org/doi/full/10.1176/appi.ajp.2019.18101123" target="_blank" rel="noopener noreferrer">2019 RCT for cocaine dependence. </a> <br/>
              Dakwar, Elias, et al. “A single ketamine infusion combined with mindfulness-based behavioral modification to treat cocaine dependence: a randomized clinical trial.” American Journal of Psychiatry 176.11 (2019): 923-930.
              <br/> <br/>
              <a href="https://www.nature.com/articles/mp201639" target="_blank" rel="noopener noreferrer">2019 RCT for cocaine use disorder. </a> <br/>
              Dakwar, E., et al. “Cocaine self-administration disrupted by the N-methyl-D-aspartate receptor antagonist ketamine: a randomized, crossover trial.” Molecular psychiatry 22.1 (2017): 76-81. 
              <br/> <br/>
              <a href="https://www.nature.com/articles/s41467-019-13162-w" target="_blank" rel="noopener noreferrer">2019 ketamine for alcohol use disorder.  </a> <br/>
              Das, Ravi K., et al. “Ketamine can reduce harmful drinking by pharmacologically rewriting drinking memories.” Nature communications 10.1 (2019): 1-10. 
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0028390818300170" target="_blank" rel="noopener noreferrer">2018 review of ketamine for substance use disorders. </a> <br/>
              Ezquerra-Romano, I. Ivan, et al. “Ketamine for the treatment of addiction: Evidence and potential mechanisms.” Neuropharmacology 142 (2018): 72-82. 
              <br/> <br/>
              <a href="https://www.frontiersin.org/articles/10.3389/fpsyt.2018.00277/full" target="_blank" rel="noopener noreferrer">2018 systematic review of ketamine for substance use disorders. </a> <br/>
              Jones, Jennifer L., et al. “Efficacy of ketamine in the treatment of substance use disorders: a systematic review.” Frontiers in psychiatry 9 (2018): 277.
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/pii/S2352154616302340" target="_blank" rel="noopener noreferrer">2017 review for substance use disorders. </a> <br/>
              Morgan, Celia, et al. “Tripping up addiction: the use of psychedelic drugs in the treatment of problematic drug and alcohol use.” Current Opinion in Behavioral Sciences 13 (2017): 71-76. 
              <br/> <br/>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/02791072.2007.10399860" target="_blank" rel="noopener noreferrer">2007 ketamine for heroin dependence. </a> <br/>
              Krupitsky, Evgeny M., et al. “Single versus repeated sessions of ketamine-assisted psychotherapy for people with heroin dependence.” Journal of psychoactive drugs 39.1 (2007): 13-19. 
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0740547202002751" target="_blank" rel="noopener noreferrer">2002 ketamine for heroin addiction. </a> <br/>
              Krupitsky, Evgeny, et al. “Ketamine psychotherapy for heroin addiction: immediate effects and two-year follow-up.” Journal of substance abuse treatment 23.4 (2002): 273-283.          
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ketamine as a treatment for PTSD & anxiety disorders
            </AccordionTrigger>
            <AccordionContent>
              <a href="https://ajp.psychiatryonline.org/doi/abs/10.1176/appi.ajp.2020.20050596" target="_blank" rel="noopener noreferrer">2021 RCT for PTSD. </a> <br/>
              Feder, Adriana, et al. “A randomized controlled trial of repeated ketamine administration for chronic posttraumatic stress disorder.” American Journal of Psychiatry 178.2 (2021): 193-202.
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0197018621000905" target="_blank" rel="noopener noreferrer">2021 review of ketamine for PTSD and putative mechanisms. </a> <br/>
              Asim, Muhammad, et al. “Ketamine For Post-Traumatic Stress Disorders And It’s Possible Therapeutic Mechanism.” Neurochemistry International (2021): 105044. 
              <br/> <br/>
              <a href="https://www.cambridge.org/core/journals/cns-spectrums/article/abs/efficacy-and-safety-of-ketamine-in-the-management-of-anxiety-and-anxiety-spectrum-disorders-a-review-of-the-literature/39BF7D6D59B39358C99094F48A7166A8" target="_blank" rel="noopener noreferrer">2020 review for the treatment of anxiety disorders. </a> <br/>
              Banov, Michael D., et al. “Efficacy and safety of ketamine in the management of anxiety and anxiety spectrum disorders: a review of the literature.” CNS spectrums 25.3 (2020): 331-342.
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1054358920300405" target="_blank" rel="noopener noreferrer">2020 review of ketamine for PTSD. </a> <br/>
              Feder, Adriana, et al. “The emergence of ketamine as a novel treatment for posttraumatic stress disorder.” Advances in Pharmacology 89 (2020): 261-286.
              <br/> <br/>
              <a href="https://europepmc.org/article/med/31675388" target="_blank" rel="noopener noreferrer">2019 ketamine for PTSD in combat veterans. </a> <br/>
              Ross, Cassie, et al. “High-dose ketamine infusion for the treatment of posttraumatic stress disorder in combat veterans.” Annals of clinical psychiatry: official journal of the American Academy of Clinical Psychiatrists 31.4 (2019): 271-279.
              <br/> <br/>
              <a href="https://www.nature.com/articles/npp2017194" target="_blank" rel="noopener noreferrer">2018 RCT for social anxiety disorder. </a> <br/>
              Taylor, Jerome H., et al. “Ketamine for social anxiety disorder: a randomized, placebo-controlled crossover trial.” Neuropsychopharmacology 43.2 (2018): 325-333. 
              <br/> <br/>
              <a href="https://link.springer.com/chapter/10.1007/7854_2017_34" target="_blank" rel="noopener noreferrer">2018 ketamine with psychotherapy in trauma. </a> <br/>
              Veen, Cato, et al. “Subanesthetic dose ketamine in posttraumatic stress disorder: a role for reconsolidation during trauma-focused psychotherapy?.” Behavioral neurobiology of PTSD. Springer, Cham, 2018. 137-162.
              <br/> <br/>
              <a href="https://journals.sagepub.com/doi/abs/10.1177/0269881117705089" target="_blank" rel="noopener noreferrer">2017 ketamine for treatment resistant anxiety disorders. </a> <br/>
              Glue, Paul, et al. “Ketamine’s dose-related effects on anxiety symptoms in patients with treatment refractory anxiety disorders.” Journal of Psychopharmacology 31.10 (2017): 1302-1305. 
              <br/> <br/>
              <a href="https://jamanetwork.com/journals/jamapsychiatry/article-abstract/1860851" target="_blank" rel="noopener noreferrer">2014 first RCT of ketamine for chronic PTSD. </a> <br/>
              Feder, Adriana, et al. “Efficacy of intravenous ketamine for treatment of chronic posttraumatic stress disorder: a randomized clinical trial.” JAMA psychiatry 71.6 (2014): 681-688. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Ketamine as a treatment for OCD</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.mdpi.com/2076-3425/11/7/856" target="_blank" rel="noopener noreferrer">2021 review for addiction, OCD and eating disorders. </a> <br/>
              Martinotti, Giovanni, et al. “Therapeutic Potentials of Ketamine and Esketamine in Obsessive–Compulsive Disorder (OCD), Substance Use Disorders (SUD) and Eating Disorders (ED): A Review of the Current Literature.” Brain Sciences 11.7 (2021): 856.
              <br/> <br/>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1876201820302951" target="_blank" rel="noopener noreferrer">2020 review for the treatment of OCD. </a> <br/>
              Sharma, Lavanya P., et al. “Clinical utility of repeated intravenous ketamine treatment for resistant obsessive-compulsive disorder.” Asian journal of psychiatry 52 (2020): 102183. 
              <br/> <br/>
              <a href="https://www.nature.com/articles/npp2013150" target="_blank" rel="noopener noreferrer">2013 first RCT with ketamine for OCD. </a> <br/>
              Rodriguez, Carolyn I., et al. “Randomized controlled crossover trial of ketamine in obsessive-compulsive disorder: proof-of-concept.” Neuropsychopharmacology 38.12 (2013): 2475-2483.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ketamine treatment against eating disorders</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.mdpi.com/2072-6643/13/11/4158" target="_blank" rel="noopener noreferrer">2021 review of ketamine for anorexia. </a> <br/>
              Keeler, Johanna Louise, et al. “Ketamine as a Treatment for Anorexia Nervosa: A Narrative Review.” Nutrients 13.11 (2021): 4158.
              <br/> <br/>
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ccr3.3869" target="_blank" rel="noopener noreferrer">2021 case series. </a> <br/>
              Schwartz, Terry, et al. “A longitudinal case series of IM ketamine for patients with severe and enduring eating disorders and comorbid treatment‐resistant depression.” Clinical case reports 9.5 (2021): e03869.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
