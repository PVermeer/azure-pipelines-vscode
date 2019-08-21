export class TelemetryKeys {
    public static Command: string = 'command';
    public static CurrentUserInput: string = 'currentUserInput';
    public static RepoProvider: string = 'repoProvider';
    public static AzureLoginRequired: string = 'azureLoginRequired';
    public static JourneyId: string = 'journeyId';
    public static SourceRepoLocation: string = 'sourceRepoLocation';
    public static NewOrganization: string = 'newOrganization';
    public static ChosenTemplate: string = 'chosenTemplate';
    public static PipelineDiscarded: string = 'pipelineDiscarded';
    public static BrowsePipelineClicked: string = 'browsePipelineClicked';

    // Durations
    public static GitHubPatDuration = 'gitHubPatDuration';
    public static CommandExecutionDuration = 'commandExecutionDuration';

    // Count of drop down items
    public static OrganizationListCount = 'OrganizationListCount';
    public static ProjectListCount = 'ProjectListCount';
    public static WebAppListCount = 'WebAppListCount';
    public static PipelineTempateListCount = 'pipelineTempateListCount';
}