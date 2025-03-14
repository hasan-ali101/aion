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
              2022 systematic review of 83 trials. 
              Walsh, Zach, et al. “Ketamine for the treatment of mental health and substance use disorders: comprehensive systematic review.” BJPsych Open 8.1 (2022).
              2021 review of neurobiological mechanisms.
              Kohtala, Samuel. “Ketamine—50 years in use: from anesthesia to rapid antidepressant effects and neurobiological mechanisms.” Pharmacological Reports (2021): 1-23.
              2020 safety review of 6630 patients.
              Feifel, David, David Dadiomov, and Kelly C Lee. “Safety of repeated administration of parenteral ketamine for depression.” Pharmaceuticals 13.7 (2020): 151.2018 blood pressure safety review.Riva-Posse, Patricio, et al. “Blood pressure safety of subanesthetic ketamine for depression: a report on 684 infusions.” Journal of affective disorders 236 (2018): 291-297.
              2018 blood pressure safety review.
              Riva-Posse, Patricio, et al. “Blood pressure safety of subanesthetic ketamine for depression: a report on 684 infusions.” Journal of affective disorders 236 (2018): 291-297.
              2017 review on ethics and safety.
              Singh, I., Morgan, C., Curran, V., Nutt, D., Schlag, A., & McShane, R. (2017). Ketamine treatment for depression: opportunities for clinical innovation and ethical foresight. The Lancet Psychiatry, 4(5), 419-426.
              2016 safety and efficacy review.
              Kishimoto, T., et al. “Single-dose infusion ketamine and non-ketamine N-methyl-d-aspartate receptor antagonists for unipolar and bipolar depression: a meta-analysis of efficacy, safety and time trajectories.” Psychological medicine 46.7 (2016): 1459-1472.
              2014 safety review.
              Wan, Le-Ben, et al. “Ketamine safety and tolerability in clinical trials for treatment-resistant depression.” The Journal of clinical psychiatry 76.3 (2014): 0-0.
              2010 safety review.  {" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ketamine-Assisted Therapy
            </AccordionTrigger>
            <AccordionContent>
              2022 on combining ACT therapy with ketamine.
              Mathai, D. S., Mora, V., & Garcia-Romeu, A. (2022). Toward Synergies of Ketamine and Psychotherapy. Frontiers in Psychology, 1203.
              2022 systematic narrative review of ketamine-assisted psychotherapy.
              Drozdz, S. J., Goel, A., McGarr, M. W., Katz, J., Ritvo, P., Mattina, G. F., … & Ladha, K. S. (2022). Ketamine Assisted Psychotherapy: A Systematic Narrative Review of the Literature. Journal of Pain Research, 15, 1691.
              2022 therapy augments effects of ketamine for alcohol use disorder.
              Grabski, M., McAndrew, A., Lawn, W., Marsh, B., Raymen, L., Stevens, T., … & Morgan, C. J. A. (2022). Adjunctive Ketamine With Relapse Prevention-Based Psychological Therapy in the Treatment of Alcohol Use Disorder. The American Journal of Psychiatry, appiajp202121030277-appiajp202121030277.
              2022 optimizing ketamine treatment with trauma-informed psychotherapy.
              Muscat, S. A., Hartelius, G., Crouch, C. R., & Morin, K. W. (2022). Optimized Clinical Strategies for Treatment-Resistant Depression: Integrating Ketamine Protocols with Trauma-and Attachment-Informed Psychotherapy. Psych, 4(1), 119-141.
              2021 therapy enhances durability of treatment effect.
              Wilkinson, Samuel T., et al. “Cognitive behavioral therapy to sustain the antidepressant effects of ketamine in treatment-resistant depression: a randomized clinical trial.” Psychotherapy and psychosomatics 90.5 (2021): 318-327.
              2020 review of therapeutic mechanisms to augment effect.
              Greenway, Kyle T., et al. “Integrating psychotherapy and psychopharmacology: psychedelic-assisted psychotherapy and other combined treatments.” Expert Review of Clinical Pharmacology 13.6 (2020): 655-670.
              2020 editorial on Motivational Enhancement Therapy to augment effect.
              Mathew, Sanjay J., and Rebecca B. Price. “Ketamine Plus Motivational Enhancement Therapy: Leveraging a Rapid Effect to Promote Enduring Change.” American Journal of Psychiatry 177.2 (2020): 107-109.
              2020 review of psychotherapeutic mechanisms to augment effect.
              Hasler, Gregor. “Toward specific ways to combine ketamine and psychotherapy in treating depression.” CNS spectrums 25.3 (2020): 445-447.
              2020 ketamine combined with motivational enhancement therapy for alcohol use disorder.
              Dakwar, Elias, et al. “A single ketamine infusion combined with motivational enhancement therapy for alcohol use disorder: a randomized midazolam-controlled pilot trial.” American Journal of Psychiatry 177.2 (2020): 125-133.
              2019 data from KAP clinics.
              Dore, Jennifer, et al. “Ketamine assisted psychotherapy (KAP): patient demographics, clinical data and outcomes in three large practices administering ketamine with psychotherapy.” Journal of psychoactive drugs 51.2 (2019): 189-198.
              2019 mindfulness-based therapy enhances positive effects with cocaine dependence.
              Dakwar, Elias, et al. “A single ketamine infusion combined with mindfulness-based behavioral modification to treat cocaine dependence: a randomized clinical trial.” American Journal of Psychiatry 176.11 (2019): 923-930. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Ketamine as a treatment for depression 
            </AccordionTrigger>
            <AccordionContent>
              2021 narrative review of ketamine for depression.
              Jelen, Luke A., and James M. Stone. “Ketamine for depression.” International Review of Psychiatry 33.3 (2021): 207-228.
              2021 international expert opinion.
              McIntyre, Roger S., et al. “Synthesizing the evidence for ketamine and esketamine in treatment-resistant depression: an international expert opinion on the available evidence and implementation.” American Journal of Psychiatry 178.5 (2021): 383-399. 
              2021 systematic review of 83 trials.
              Walsh, Zach, et al. “Ketamine for the treatment of mental health and substance use disorders: comprehensive systematic review.” BJPsych Open 8.1 (2022).
              2021 Canadian task force recommendations.
              Swainson, Jennifer, et al. “The Canadian Network for Mood and Anxiety Treatments (CANMAT) task force recommendations for the use of racemic ketamine in adults with major depressive disorder: Recommandations du groupe de travail du réseau canadien pour les traitements de l’humeur et de l’anxiété (canmat) concernant l’utilisation de la kétamine racémique chez les adultes souffrant de trouble dépressif majeur.” The Canadian Journal of Psychiatry 66.2 (2021): 113-125. 
              2021 systematic review and meta-analysis.
              Bahji, Anees, Gustavo H. Vazquez, and Carlos A. Zarate Jr. “Comparative efficacy of racemic ketamine and esketamine for depression: a systematic review and meta-analysis.” Journal of affective disorders 278 (2021): 542-555. 
              2021 brief summary review in the Journal of the Norwegian Medical Association.
              Kvam, T. M., Stewart, L. H., Blomkvist, A. W., & Andreassen, O. A. (2021). Ketamine for depression–evidence and proposals for practice. Tidsskrift for Den norske legeforening. 
              2019 review.
              Krystal, John H., et al. “Ketamine: a paradigm shift for depression research and treatment.” Neuron 101.5 (2019): 774-778. 
              2017 CBT plus ketamine for depression.
              Wilkinson, Samuel T., et al. “Cognitive behavior therapy may sustain antidepressant effects of intravenous ketamine in treatment-resistant depression.” Psychotherapy and psychosomatics 86.3 (2017): 162-167.
              2017 consensus from the American Psychiatric Association.
              Sanacora, Gerard, et al. “A consensus statement on the use of ketamine in the treatment of mood disorders.” JAMA psychiatry 74.4 (2017): 399-405.
              2013 trial demonstrating increased durability by repeat treatments.
              Murrough, James W., et al. “Rapid and longer-term antidepressant effects of repeated ketamine infusions in treatment-resistant major depression.” Biological psychiatry 74.4 (2013): 250-256. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ketamine as a treatment for suicidal thoughts</AccordionTrigger>
            <AccordionContent>
              2021 systematic review.
              Hochschild, Annabella, Michael F. Grunebaum, and J. John Mann. “The rapid anti-suicidal ideation effect of ketamine: a systematic review.” Preventive medicine 152 (2021): 106524.
              2020 systematic review and meta-analysis.
              Witt, Katrina, et al. “Ketamine for suicidal ideation in adults with psychiatric disorders: A systematic review and meta-analysis of treatment trials.” Australian & New Zealand Journal of Psychiatry 54.1 (2020): 29-45.
              2018 systematic review and meta-analysis.
              Wilkinson, Samuel T., et al. “The effect of a single dose of intravenous ketamine on suicidal ideation: a systematic review and individual participant data meta-analysis.” American journal of psychiatry 175.2 (2018): 150-158.
              2018 large RCT.
              Grunebaum, Michael F., et al. “Ketamine for rapid reduction of suicidal thoughts in major depression: a midazolam-controlled randomized clinical trial.” American Journal of Psychiatry 175.4 (2018): 327-335.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ketamine as a treatment for Drug addictions</AccordionTrigger>
            <AccordionContent>
              Donec auctor eget odio vel mattis. Etiam non tristique elit.
              Curabitur pellentesque sodales ipsum ut blandit. Suspendisse
              lectus eros, pellentesque ac dui vitae, dapibus imperdiet nisl.
              Vivamus at leo mauris. Fusce vel ligula at eros efficitur laoreet.
              Duis vulputate ullamcorper commodo. Nulla facilisi. Donec at
              congue mauris. Maecenas euismod tempor molestie.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ketamine as a treatment for against PTSD and anxiety disorders
            </AccordionTrigger>
            <AccordionContent>
              2021 RCT for PTSD. 
              Feder, Adriana, et al. “A randomized controlled trial of repeated ketamine administration for chronic posttraumatic stress disorder.” American Journal of Psychiatry 178.2 (2021): 193-202.
              2021 review of ketamine for PTSD and putative mechanisms. 
              Asim, Muhammad, et al. “Ketamine For Post-Traumatic Stress Disorders And It’s Possible Therapeutic Mechanism.” Neurochemistry International (2021): 105044. 
              2020 review for the treatment of anxiety disorders. 
              Banov, Michael D., et al. “Efficacy and safety of ketamine in the management of anxiety and anxiety spectrum disorders: a review of the literature.” CNS spectrums 25.3 (2020): 331-342.
              2020 review of ketamine for PTSD 
              Feder, Adriana, et al. “The emergence of ketamine as a novel treatment for posttraumatic stress disorder.” Advances in Pharmacology 89 (2020): 261-286.
              2019 ketamine for PTSD in combat veterans. 
              Ross, Cassie, et al. “High-dose ketamine infusion for the treatment of posttraumatic stress disorder in combat veterans.” Annals of clinical psychiatry: official journal of the American Academy of Clinical Psychiatrists 31.4 (2019): 271-279.
              2018 RCT for social anxiety disorder. 
              Taylor, Jerome H., et al. “Ketamine for social anxiety disorder: a randomized, placebo-controlled crossover trial.” Neuropsychopharmacology 43.2 (2018): 325-333. 
              2018 ketamine with psychotherapy in trauma. 
              Veen, Cato, et al. “Subanesthetic dose ketamine in posttraumatic stress disorder: a role for reconsolidation during trauma-focused psychotherapy?.” Behavioral neurobiology of PTSD. Springer, Cham, 2018. 137-162.
              2017 ketamine for treatment resistant anxiety disorders. 
              Glue, Paul, et al. “Ketamine’s dose-related effects on anxiety symptoms in patients with treatment refractory anxiety disorders.” Journal of Psychopharmacology 31.10 (2017): 1302-1305. 
              2014 first RCT of ketamine for chronic PTSD. 
              Feder, Adriana, et al. “Efficacy of intravenous ketamine for treatment of chronic posttraumatic stress disorder: a randomized clinical trial.” JAMA psychiatry 71.6 (2014): 681-688. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Ketamine as a treatment for OCD</AccordionTrigger>
            <AccordionContent>
              2021 review for addiction, OCD and eating disorders. 
              Martinotti, Giovanni, et al. “Therapeutic Potentials of Ketamine and Esketamine in Obsessive–Compulsive Disorder (OCD), Substance Use Disorders (SUD) and Eating Disorders (ED): A Review of the Current Literature.” Brain Sciences 11.7 (2021): 856.
              2020 review for the treatment of OCD. 
              Sharma, Lavanya P., et al. “Clinical utility of repeated intravenous ketamine treatment for resistant obsessive-compulsive disorder.” Asian journal of psychiatry 52 (2020): 102183. 
              2013 first RCT with ketamine for OCD. 
              Rodriguez, Carolyn I., et al. “Randomized controlled crossover trial of ketamine in obsessive-compulsive disorder: proof-of-concept.” Neuropsychopharmacology 38.12 (2013): 2475-2483.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ketamine treatment against Eating disorders</AccordionTrigger>
            <AccordionContent>
              2021 review of ketamine for anorexia. 
              Keeler, Johanna Louise, et al. “Ketamine as a Treatment for Anorexia Nervosa: A Narrative Review.” Nutrients 13.11 (2021): 4158.
              2021 case series. 
              Schwartz, Terry, et al. “A longitudinal case series of IM ketamine for patients with severe and enduring eating disorders and comorbid treatment‐resistant depression.” Clinical case reports 9.5 (2021): e03869.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
